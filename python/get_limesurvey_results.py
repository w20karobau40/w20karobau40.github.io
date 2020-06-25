import base64
import re
import time
from typing import List, Dict, Optional

import configargparse
import requests
from loguru import logger

URL = ""
SESSION_KEY = ""
USERNAME = ""
PASSWORD = ""


def call_method(method: str, params: list, id_: int = 1) -> dict:
    assert len(URL) > 0
    response = requests.post(URL, json={'method': method, 'params': params, 'id': id_})
    # TODO: Add limit
    while not response.text.startswith(('[', '{')):
        logger.warning("Response is not valid json, trying again. Actual response: {}", response.text)
        time.sleep(1)
        response = requests.post(URL, json={'method': method, 'params': params, 'id': id_})
    return response.json()


def call_method_with_session_key(method: str, *params, id_: int = 1, max_retries: int = 3):
    global SESSION_KEY
    for retry_counter in range(1, max_retries + 1):
        try:
            response = call_method(method, [SESSION_KEY] + list(params), id_)['result']
        except Exception:
            logger.exception("Error getting method result ({} / {})", retry_counter, max_retries, diagnose=True)
            continue
        if 'status' in response and response['status'].lower().startswith('invalid') and response['status'].lower().endswith('key'):
            logger.error("Invalid session key, getting new session key ({} / {})", retry_counter, max_retries)
            SESSION_KEY = get_session_key(True)
            continue
        return response
    logger.error("Failed getting valid response within specified number of retries")
    return None


def get_session_key(force: bool = False) -> str:
    if force:
        key = call_method('get_session_key', [USERNAME, PASSWORD]).get('result')
        # TODO: Handle wrong username password combination
        with open('SESSION_KEY', 'w') as file:
            file.write(key)
        return key
    try:
        with open('SESSION_KEY') as file:
            key = file.read()
    except FileNotFoundError:
        key = get_session_key(True)
    return key


def list_surveys(username: str = None) -> list:
    if username:
        return call_method_with_session_key('list_surveys', username)
    else:
        return call_method_with_session_key('list_surveys')


def get_survey_properties(survey_id: int):
    return call_method_with_session_key('get_survey_properties', survey_id)


def export_responses(survey_id: int, document_type: str):
    result = call_method_with_session_key('export_responses', survey_id, document_type)
    return base64.b64decode(result).decode()


def list_users():
    return call_method_with_session_key('list_users')


def release_session_key():
    return call_method_with_session_key('release_session_key')


def list_groups(survey_id: int) -> List[Dict[str, str]]:
    return call_method_with_session_key('list_groups', survey_id)


def list_questions(survey_id: int, group_id: Optional[int] = None) -> List[Dict[str, str]]:
    return call_method_with_session_key('list_questions', survey_id, group_id)


def get_question_properties(question_id: int, question_settings: Optional[List[str]] = None) -> Dict[str, str]:
    return call_method_with_session_key('get_question_properties', question_id, question_settings)


def remove_html(s: str) -> str:
    return re.sub(r'<[^>]*>', '', s).replace('\r\n', ' ')


def print_questions_with_answers(survey_id, filenname):
    with open(filenname, 'w', encoding='utf8') as output_file:
        groups = sorted(list_groups(survey_id), key=lambda g: int(g.get('group_order')))
        for group in groups:
            group_id = int(group['gid'])
            if group_id == 52:
                continue
            output_file.write(group['group_name'] + '\n')
            questions = sorted(list_questions(survey_id, group_id), key=lambda q: int(q.get('question_order')))
            question_properties = {qid: get_question_properties(qid) for qid in (int(q['qid']) for q in questions)}
            main_qids = sorted(filter(lambda qid: not any(str(qid) in q.get('subquestions', []) for q in question_properties.values() if q.get('subquestions') != 'No available answers')
                                                  and question_properties[qid].get('type') != 'X', question_properties.keys()), key=lambda qid: int(question_properties[qid]['question_order']))
            for qid in main_qids:
                question = question_properties[qid]
                output_file.write(f"  {question['title']:<9} | {remove_html(question['question'])}\n")
                answeroptions = question.get('answeroptions')
                if isinstance(answeroptions, dict):
                    output_file.write("ANSWEROPTIONS:\n")
                    for key, value in answeroptions.items():
                        output_file.write(f"    {key:<7} | {value['answer']}\n")
                subquestions = question.get('subquestions')
                if isinstance(subquestions, dict):
                    output_file.write("SUBQUESTIONS:\n")
                    sub_qids = sorted(subquestions.keys(), key=lambda sq: int(question_properties[int(sq)].get('question_order')))
                    for sqid in sub_qids:
                        output_file.write(f"    {subquestions[sqid]['title']:<7} | {subquestions[sqid]['question']}\n")
            output_file.write('\n')


def main():
    global SESSION_KEY, URL, USERNAME, PASSWORD
    p = configargparse.ArgumentParser(default_config_files=['config.ini'])
    p.add_argument('--api_url', required=True)
    p.add_argument('--username', required=True)
    p.add_argument('--password', required=True)

    options = p.parse_args()

    URL = options.api_url
    USERNAME = options.username
    PASSWORD = options.password
    SESSION_KEY = get_session_key()

    survey_id = 197925
    print_questions_with_answers(survey_id, 'question.txt')


if __name__ == '__main__':
    main()

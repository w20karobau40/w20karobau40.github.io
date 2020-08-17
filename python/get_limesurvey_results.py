import base64
import json
import os
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


def levenshtein_distance(s1: str, s2: str) -> int:
    if s1 == s2:
        return 0
    # https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#Python
    if len(s1) < len(s2):
        return levenshtein_distance(s2, s1)
    # len(s1) >= len(s2)
    if len(s2) == 0:
        return len(s1)

    previous_row = range(len(s2) + 1)
    for i, c1 in enumerate(s1):
        current_row = [i + 1]
        for j, c2 in enumerate(s2):
            insertions = previous_row[j + 1] + 1  # j+1 instead of j since previous_row and current_row are one character longer
            deletions = current_row[j] + 1  # than s2
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    return previous_row[-1]


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


@logger.catch(reraise=True)
def export_responses(survey_id: int, document_type: str):
    result = call_method_with_session_key('export_responses', survey_id, document_type)
    if isinstance(result, dict) and 'status' in result.keys():
        logger.error("response: {}, returning empty data for now", result)
        return {'responses': []}
    return json.loads(base64.b64decode(result).decode())


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
    result = re.sub(r'<[^>]*>', '', s)
    for old, new in [('\r\n', ' '), ('&amp;', '&'), ('&lt;', '<'), ('&gt;', '>')]:
        result = result.replace(old, new)
    return result


def get_questions_with_answers(survey_id):
    result = []
    groups = sorted(list_groups(survey_id), key=lambda g: int(g.get('group_order')))
    for group in groups:
        group_id = int(group['gid'])
        if group_id == 52:
            continue
        current_group = {'group_name': group['group_name'], 'questions': []}
        questions = sorted(list_questions(survey_id, group_id), key=lambda q: int(q.get('question_order')))
        question_properties = {qid: get_question_properties(qid) for qid in (int(q['qid']) for q in questions)}
        main_qids = sorted(filter(lambda qid: not any(str(qid) in q.get('subquestions', []) for q in question_properties.values() if q.get('subquestions') != 'No available answers')
                                              and question_properties[qid].get('type') != 'X', question_properties.keys()), key=lambda qid: int(question_properties[qid]['question_order']))
        for qid in main_qids:
            question = question_properties[qid]
            current_question = {'code': question['title'], 'text': remove_html(question['question'])}
            answeroptions = question.get('answeroptions')
            if isinstance(answeroptions, dict):
                answer_codes = sorted(answeroptions.keys(), key=lambda a: int(answeroptions[a]['order']))
                current_question['answeroptions'] = []
                for a in answer_codes:
                    current_question['answeroptions'].append({'code': a, 'text': remove_html(answeroptions[a]['answer'])})
            subquestions = question.get('subquestions')
            if isinstance(subquestions, dict):
                sub_qids = sorted(subquestions.keys(), key=lambda sq: int(question_properties[int(sq)].get('question_order')))
                current_question['subquestions'] = []
                for sqid in sub_qids:
                    current_question['subquestions'].append({'code': subquestions[sqid]['title'], 'text': remove_html(subquestions[sqid]['question'])})
            current_group['questions'].append(current_question)
        result.append(current_group)
    return result


@logger.catch(reraise=True)
def convert_limesurvey(data: dict, survey_id: int):
    try:
        with open('question_and_answers.json') as file:
            question_and_answers = json.load(file)
    except:
        with open('question_and_answers.json', 'w') as file:
            question_and_answers = get_questions_with_answers(survey_id)
            json.dump(question_and_answers, file)
    questions = []
    for qa in question_and_answers:
        questions.extend(qa['questions'])
    answeroptions = {}
    for question in questions:
        if 'subquestions' in question.keys():
            for sq in question['subquestions']:
                answeroptions[f'{question["code"]}[{sq["code"]}]'] = question.get('answeroptions', [{'text': 'not quoted', 'code': ''}, {'text': 'quoted', 'code': 'Y'}])
        else:
            answeroptions[question['code']] = question.get('answeroptions', [{'text': 'not quoted', 'code': ''}, {'text': 'quoted', 'code': 'Y'}])
    result = []
    with open('javascript_structure.json') as input_file:
        structure = json.load(input_file)
    for answer in data['responses']:
        current_answer = next(a for a in answer.values())
        # skip sample answer
        if current_answer['id'] == '1':
            continue
        current_result = {'categories': [], 'questions': []}
        for code in structure['categories']:
            answercode = current_answer[code]
            index, opt_code = min(enumerate(answeroptions[code]), key=lambda t: levenshtein_distance(t[1]['code'], answercode))
            if levenshtein_distance(opt_code['code'], answercode) < 2:
                current_result['categories'].append(index)
            else:
                current_result['categories'].append(-1)
        for question in structure['questions']:
            current_question = []
            for code in question:
                answercode = current_answer[code]
                index, opt_code = min(enumerate(answeroptions[code]), key=lambda t: levenshtein_distance(t[1]['code'], answercode))
                if levenshtein_distance(opt_code['code'], answercode) < 2:
                    current_question.append(index)
                else:
                    current_question.append(-1)
            current_result['questions'].append(current_question)

        result.append(current_result)
    return result


def print_questions():
    with open('question_and_answers.json') as input_file:
        question_and_answers = json.load(input_file)
    questions = []
    for qa in question_and_answers:
        questions.extend(qa['questions'])
    for question in questions:
        print(f'"{question["text"]}"')
        if 'subquestions' in question.keys():
            print(', '.join(f'"{sq["text"]}"' for sq in question['subquestions']))
            print(', '.join(f'"{question["code"]}[{sq["code"]}]"' for sq in question['subquestions']))
        else:
            print(f'"{question["code"]}"')
        if 'answeroptions' in question.keys():
            print(', '.join(f'"{ao["text"]}"' for ao in question['answeroptions']))
            print(', '.join(f'"{ao["code"]}"' for ao in question['answeroptions']))
        print()


def setup_args():
    global SESSION_KEY, URL, USERNAME, PASSWORD
    p = configargparse.ArgumentParser(default_config_files=['config.ini'])
    p.add_argument('--api_url', required=True, env_var='LIMESURVEY_URL')
    p.add_argument('--username', required=True, env_var='LIMESURVEY_USERNAME')
    p.add_argument('--password', required=True, env_var='LIMESURVEY_PASSWORD')

    options = p.parse_args()

    URL = options.api_url
    USERNAME = options.username
    PASSWORD = options.password
    # logger.debug("Using URL {}", URL)
    SESSION_KEY = get_session_key()


def main():
    setup_args()
    survey_id = 197925
    with open('question_and_answers.json', 'w') as file:
        json.dump(get_questions_with_answers(survey_id), file)


def new_main():
    setup_args()
    survey_id = 197925
    data = export_responses(survey_id, 'json')
    answers_string = str(convert_limesurvey(data, survey_id)).replace("'categories'", "categories").replace("'questions'", "questions")
    with open('limesurvey_data.js', 'w') as file:
        file.write(f"export const limesurvey_answers = {answers_string};")


if __name__ == '__main__':
    new_main()

import base64

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
    return response.json()


def call_method_with_session_key(method: str, *params, id_: int = 1, max_retries: int = 3) -> dict:
    global SESSION_KEY
    response = call_method(method, [SESSION_KEY] + list(params), id_)
    retry_counter = 0
    while response.get('result') == {'status': 'Invalid session key'}:
        logger.error("Invalid session key, getting new session key ({} / {})", retry_counter + 1, max_retries)
        SESSION_KEY = get_session_key()
        response = call_method(method, [SESSION_KEY] + list(params), id_)
    return response


def get_session_key() -> str:
    try:
        with open('SESSION_KEY') as file:
            key = file.read()
    except FileNotFoundError:
        key = call_method('get_session_key', [USERNAME, PASSWORD]).get('result')
        # TODO: Handle wrong username password combination
        with open('SESSION_KEY', 'w') as file:
            file.write(key)
    return key


def list_surveys(username: str = None) -> list:
    return call_method_with_session_key('list_surveys', username).get('result')


def get_survey_properties(survey_id: int):
    return call_method_with_session_key('get_survey_properties', survey_id).get('result')


def export_responses(survey_id: int, document_type: str):
    result = call_method_with_session_key('export_responses', survey_id, document_type).get('result')
    return base64.b64decode(result).decode()


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

    print(list_surveys())


if __name__ == '__main__':
    main()

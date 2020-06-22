import requests

URL = "https://websites.fraunhofer.de/iwu-surveys/index.php/admin/remotecontrol"


def call_method(method: str, params: list, id_: int = 1) -> dict:
    response = requests.post(URL, json={'method': method, 'params': params, 'id': id_})
    return response.json()


def get_session_key(username: str, password: str) -> str:
    response = call_method('get_session_key', [username, password])
    return response.get('result')


if __name__ == '__main__':
    print(get_session_key(input('Username: '), input('Password: ')))

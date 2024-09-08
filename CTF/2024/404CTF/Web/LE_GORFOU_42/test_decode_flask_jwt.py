import json
import zlib
from base64 import b64decode
from uuid import UUID

from itsdangerous import base64_decode
from werkzeug.http import parse_date
from markupsafe import Markup

class DecodeError(Exception):
    pass

def decode(value: str) -> dict:
    try:
        compressed = False
        payload = value

        if payload.startswith('.'):
            compressed = True
            payload = payload[1:]

        data = payload.split(".")[0]

        data = base64_decode(data)

        if compressed:
            data = zlib.decompress(data)

        data = data.decode("utf-8")

    except Exception as e:
        raise (
            f'Failed to decode cookie, are you sure '
            f'this was a Flask session cookie? {e}')

    def hook(obj):
        if len(obj) != 1:
            return obj

        key, val = next(iter(obj.items()))

        if key == ' t':
            return tuple(val)
        elif key == ' u':
            return UUID(val)
        elif key == ' b':
            return b64decode(val)
        elif key == ' m':
            return Markup(val)
        elif key == ' d':
            return parse_date(val)

        return obj

    try:
        return json.loads(data, object_hook=hook)

    except json.JSONDecodeError as e:
        raise DecodeError(
            f'Failed to decode cookie, are you sure '
            f'this was a Flask session cookie? {e}')

def main():
  jwt = ".eJwlzj0OwjAMBtC7ZGZI4vw4vQxybH-iEgKpLSyIu1OJ8W3vE67YfL-F5dhefgnX1cISGlipax5dJ7JmGhMyi4E7KCaJuZZaIpu0NHrj4hDmYa1VjSAVsVaQvdqI6j1Kzgk4WaZ4mkzoPtRgZHWiUtFUMhJLIljiGc7Ia_ftv6GTb99WrCrH-nyEBXLf_fsDcCs4fA.ZjeHGg.u4VUwTpzthZ_g-zSHqZGHxZWS1A"
  print(decode(jwt))


if __name__ == '__main__':
    main()

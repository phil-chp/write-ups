# Bébé nageur ⚪

[< Go back](../../README.md)

## Description

Vous ressortez de votre premier cours de natation et quelqu'un vous a laissé un petit mot dans votre casier. Vous suspectez votre rival que vous venez juste de battre à plate couture lors d'une course effrénée dans le bassin des bébés nageurs.

Déchiffrez ce message.

all files in [resources/](./resources) were provided.

## Challenge

Looking at the [challenge.py](resources/challenge.py) file, we see a hashed flag, that plays with two different random numbers `a` and `b`, it uses these numbers trough a formula `f` to cipher the flag.

First step let's find both random values, we can guess that the flag starts with `404CTF{` this is more than enough to find the correct `a` and `b`:

```py
HASH = "-4-c57T5fUq9UdO0lOqiMqS4Hy0lqM4ekq-0vqwiNoqzUq5O9tyYoUq2_"
flag = "404CTF{"

for a in range(len(charset[2:n-1])):
  for b in range(len(charset[1:n-1])):

    for i in range(len(flag)):
      h = charset.index(HASH[i])
      x = charset.index(flag[i])

      if h != f(a, b, n, x):
        break

      if x + 1 == len(flag):
        print(f"Found random values: a={a}, b={b}")
        # > 19, 6
```

Now that we have them it's just a matter of brute forcing the whole charset for each character of the flag and finding the flag:

```py
flag = ""

for h in HASH:
  for c in charset:
    if h == charset[f(19, 6, n, charset.index(c))]:
      flag += c

print(f"Found flag: {flag}")
```

Flag: `404CTF{Th3_r3vEnGE_1S_c0minG_S0oN_4nD_w1Ll_b3_TErRiBl3_!}`

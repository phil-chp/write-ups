# from flag import FLAG
import random as rd

FLAG = ""
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}_-!"

a = 66	# a: index([c, !]) 2
b = 66	# b: index([b, !]) 1
n = 67	# n: 67
x = 4		# x: [c in FLAG] ? 4

# print(charset[(a*x+b)%n])

# exit(0)

def f(a,b,n,x):
  return (a*x+b)%n

def encrypt(message,a,b,n):
  encrypted = ""
  for char in message:
    x = charset.index(char)
    x = f(a,b,n,x)
    encrypted += charset[x]

  return encrypted

n = len(charset)
a = rd.randint(2,n-1)
b = rd.randint(1,n-1)

# print(encrypt(FLAG,a,b,n))

# ENCRYPTED FLAG : -4-c57T5fUq9UdO0lOqiMqS4Hy0lqM4ekq-0vqwiNoqzUq5O9tyYoUq2_

HASH = "-4-c57T5fUq9UdO0lOqiMqS4Hy0lqM4ekq-0vqwiNoqzUq5O9tyYoUq2_"
password = ""

for i in range(len(charset[2:n-1])):
  for j in range(len(charset[1:n-1])):
    for k in range(len(password)):
      h = charset.index(HASH[k])
      c = charset.index(password[k])

      if h != f(i, j, n, c):
        break
      if k + 1 == len(password):
        print(f"Found random values: a={i}, b={j}")
        # > 19, 6


for h in HASH:
  for c in charset:
    if h == charset[f(19, 6, n, charset.index(c))]:
      password += c

print(f"Found password: {password}")
# 404CTF{Th3_r3vEnGE_1S_c0minG_S0oN_4nD_w1Ll_b3_TErRiBl3_!}

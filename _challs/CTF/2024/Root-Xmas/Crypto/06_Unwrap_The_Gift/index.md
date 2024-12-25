---
layout: Post
format: chall
title: Day 06 - Unwrap The Gift
date: 2024-12-08
ctf: Root-Xmas
tags: [AES]
category: [Crypto]
---
# Day 06 - Unwrap The Gift

<a class="back-link" href="../../">< Go back</a>

## Description

Root-Me's Santa is being very generous this year, giving everyone who comes to see him a little present, but he's made sure you can't open it until the 25th...

Author : Mika
nc 163.172.68.42 10006

all files in [resources/](./resources) were provided.

## Challenge

Looking at the code provided we see that the same IV is used to encode 2 different messages.

The first is our flag, which we don't know, the second is a custom user prompt.

Using this information we can easily get IV back.

Let's recap, we have.

```
C_known -> a known ciphertext
P_known -> a known plaintext

C_unknown -> the flag ciphertext
P_unknown -> the flag
```

From this we can do:

```
IV = C_known ^ P_known
P_known = C_known ^ IV
```

The only requirement is for the P_known to be long enough to be able to decode the whole flag.

Let's make our [reverse.py](./reverse.py) and get the flag.

---
layout: Post
type: chall
---
# BankRupst 🟡

<a class="back-link" href="../../">< Go back</a>

## Description

BankRupst is a bank operating in bankruptcy where no laws are applicable.

nc pwn.heroctf.fr 6001

Author : ghizmo

all files in [resources/](./resources) were provided.

## Challenge

Looking at the rust code, we only see one vulnerability that stands out, the use of alloc
 and dealloc to manage a ptr manually. This is bad practice especially since rust tries it's best to avoid manual memory management.

From static analysis of the code, we were not really able to see the vulnerability though we suspect it's related to the use of dealloc between the following options:

```
5) Remove BankRupst card
6) Exit
```

Our objective is to reach >1337 credits. This is impossible as we can only do 13 transctions of 100 points max.

We need to somehow break this limitation.

Let's go for dynamic analysis, trying some stuff out like creating a card, removing it, and so on. We end up seeing that if we do a transaction and exit the CLI instead of removing the card, we don't really exit. This allows us to keep the balance but resetting the transaction counter.

Thanks to this we can do a simple pwn script that gets us the flag.

See [exploit.py](./exploit.py) for the exploit.

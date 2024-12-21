---
layout: Post
type: chall
---
# Intronisation du CHAUSSURE 🟡

<a class="back-link" href="../../">< Go back</a>

## Description

Montrez votre valeur

Le CHAUSSURE, cette fameuse entité pionnière dans le domaine du sport de combat a ouvert un tournoi pour tous les chat-diateurs qui souhaiteraient se mesurer au reste du monde. Les présélections commencent et un premier défi a été publié par le CHAUSSURE. Ce dernier semble très cryptique, à vous d'en déceler les secrets!

Format de flag : 404CTF{mot-de-passe}

all files in [resources/](./resources) were provided.

## Challenge

Reversing the bin with any disassembler, for example Ghidra, we can see the structure of the password:

```c
sVar1 = _strlen(&local_28);
if (((((sVar1 == 0xe) && (local_27 == 't')) && (local_21 == 'r')) &&
    ((((local_1e == '1' && (local_1d == 's')) &&
      ((local_23 == 'n' && ((local_24 == '1' && (local_26 == 'u')))))) && (local_28 == '5')))) &&
    ((((local_1f == 'n' && (local_1c == '3')) && (local_20 == '0')) &&
    ((local_25 == 'p' && (local_22 == 't')))))) {
  syscall();
}
```

I actually opened it first in BinaryNinja (free version), and it did some weird stuff but helped me with the cleanup process, having to deal with all those parenthesis is hell lol.

```
var_28   0x35    53     5
var_27   0x74    116    t
var_26   0x75    117    u
var_25   0x70    112    p
var_24   0x31    49     1
var_23   0x6e    110    n
var_22   0x74    116    t
var_21   0x72    114    r
var_20   0x30    48     0
var_1f   0x6e    110    n
var_1e   0x31    49     1
var_1d   0x73    115    s
var_1c   0x33    51     3
```

The password is `5tup1ntr0n1s3` and the flag is `404CTF{5tup1ntr0n1s3}`.
<br><br><br>
_Le crou ne mourra jamais._

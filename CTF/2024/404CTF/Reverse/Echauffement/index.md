---
layout: Post
type: chall
---
# Échauffement ⚪

<a class="back-link" href="../../">< Go back</a>

## Description

Un bon échauffement permet non seulement d'éviter des blessures, mais aussi de conditionner son corps et son esprit au combat qui va suivre. Ce crackme devrait constituer un exercice adéquat.

all files in [resources/](./resources) were provided.

## Challenge

Opening [echauffement.bin](resources/echauffement.bin) in our favorite disassembler, we see that the actual flag is just hashed with a basic algorithm, we can reverse it manually pretty quickly, let's first grab the string: `\x68\x5f\x66\x83\xa4\x87\xf0\xd1\xb6\xc1\xbc\xc5\x5c\xdd\xbe\xbd\x56\xc9\x54\xc9\xd4\xa9\x50\xcf\xd0\xa5\xce\x4b\xc8\xbd\x44\xbd\xaa\xd9`:

Here is the algorithm used to verify the user inputed flag:

```c
uint64_t secret_func_dont_look_here(void* arg1)
{
    int32_t rax_1 = strlen(secret_data);
    int32_t var_10 = 0;
    for (int32_t i = 0; i < rax_1; i = (i + 1))
    {
        if (((*(uint8_t*)((char*)arg1 + ((int64_t)i)) * 2) - i) != *(uint8_t*)(((int64_t)i) + secret_data))
        {
            var_10 = 1;
        }
    }
      return ((uint64_t)var_10);
}
```

Pretty messy, if we extract the simple logic in pseudo code:

```py
for i, c in enumerate(test):
  hash += hex(ord(c) * 2 - i)
```

Let's reverse it:

```py
for i, c in enumerate(str):
  print(chr((ord(c) + i) // 2), end="")
print()
```

And we get the flag: `404CTF{l_ech4uff3m3nt_3st_t3rm1ne}`

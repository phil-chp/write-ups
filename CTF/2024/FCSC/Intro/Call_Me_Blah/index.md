---
layout: Post
type: chall
---
# Call Me Blah

<a class="back-link" href="../../">< Go back</a>

## Description

On vous place dans le cas typique d'une fin d'exploitation. Pouvez-vous obtenir un shell ?

> `nc challenges.france-cybersecurity-challenge.fr 2103`

all files in [resources/](./resources) were provided.

## Challenge

### Recon

After looking at the [call-me-blah.c](resources/call-me-blah.c) file, we clearly see our vector of attack.

First we get a heads up on where stdin is located in memory. (I ran it once from netcat, and for example I got: `0x6ec4a1e27a80`)

Then we are asked a number to be the location of where the `call_me` pointer function calls. This is obviously extremely dangerous, as we can call anything we want, but currently I don't know what to call so let's keep digging.

Finally we are asked for the parameter we want to send trough `call_me`, anything goes, but only 31 characters are kept.

And that's it for the code we are given.

### Decompiling

Looking at the `call-me-blah` binary for any interesting stuff using ghidra doesn't give anything more, it's just the `call-me-blah.c` compiled with extra objects for LibC functions.

### Libraries

Talking about LibC, we are given both `libc-2.36.so` and `ld-2.36.so`.

---
layout: Post
format: chall
title: Day 11 - Padoru
date: 2024-12-11
ctf: Root-Xmas
tags: [OpenGL, SPIR-V, Obfuscation]
category: [Reverse]
---
# Day 11 - Padoru

<a class="back-link" href="../../">< Go back</a>

## Description

Every year, christmas is the opportunity for the Padoru to be in the spotlight once again!

But this time, the sneaky Padoru is hiding something... The legend says that finding her secret will turn her into an evil version!!

Will you uncover the Padoru secrets?

Author : Elf

all files in [resources/](./resources) were provided.

## Challenge

After decompiling the binary using our favorite decompiler, it's a C++ program that uses OpenGL to load a vertex, the code itself is a bit messy as simple read/write from stdin/stdout are done with a complex stream system.

There's an intersting bit of code that grabs an encrypted secret and does some data alignment over 4 bytes, only the first byte is written to, the 3 others are trailing 0's. This looks like it's aligning the data over a color channel (RGBA) but I'm not sure.

I extracted the function, deobfuscated it and ran it to see if that gave me anything clear, but it didn't:

```c
// 4a 4d 7a 4a 37 57 4d 37 55 3b 56 59 3b 5e 3c 51 56 20 4e 59 27 4e 26 49 59 28 5f 58 32 56 5b 4b 37 58 5c 5a 5f 40 3d 40 3f 47 24 43 26 4c 43 25 49 47 2c 44 31 50 56 5b 55 32 43 38 5b 5f 2a 2d 2c 2f 72

#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

int main(void) {
    char encTrueChristmasSecret[] = "JMzJ7WM7U;VY;^<QV NY'N&IY(_X2V[K7X\\Z_@=@?G$C&LC%IG,D1PV[U2C8[_*-,/r";
    char *res = (char *)malloc(sizeof(char) * 270);

    for (size_t i = 0; i < 0x43; ++i) {
        res[i] = encTrueChristmasSecret[i];
    }
    printf("%s\n", res);
    return 0;
}
```

From here we see that the data gets sent into a buffer via:

```c
glewBufferSubdata(0x8a11, 0, 0x430, /* our encoded data stream */);
```

`0x8a11` is being used all troughout the code, it seems to be the address or padding in memory where the openGL handles the vertex.

So let's focus on that, looking at the compiled `.spv` files, I looked for a way to decompile them, and I found [SPIR-V Tools](https://github.com/KhronosGroup/SPIRV-Tools) a suite of tools to manipulate SPIR-V files. In our case the tool we are interested in is `spirv-dis` which decompiles the binary into a human readable format.

```bash
spirv-dis resources/vertex.spv > vertex-decomp.spvasm
spirv-dis resources/fragment.spv > fragment-decomp.spvasm
```

Looking a these files ([vertex-decomp.spvasm](./vertex-decomp.spvasm), [fragment-decomp.spvasm](./fragment-decomp.spvasm)) we see a bunch of instructions that go all over the place

---
layout: Post
format: chall
title: Layer Cake 1/3
date: 2024-04-05
ctf: FCSC
tags: [Docker]
category: [Forensics]
---
# Layer Cake 1/3

<a class="back-link" href="../../">< Go back</a>

## Description

Un développeur de GoodCorp souhaite publier une nouvelle image Docker. Il utilise une variable d'environnement stockant un flag au moment du build, et vous assure que ce secret n'est pas visible du public. L'image est `anssi/fcsc2024-forensics-layer-cake-1`.

Récupérez ce flag et prouvez-lui le contraire.

## Challenge

We can view the history of the image:

```bash
docker history anssi/fcsc2024-forensics-layer-cake-1 --no-trunc
# IMAGE                                                                     CREATED        CREATED BY                                                                                          SIZE      COMMENT
# sha256:0faa62781dd1db0ebb6cd83836bb4ba24f8b58b0cd761ac0cbae426bccc7666f   2 months ago   CMD ["/bin/sh"]                                                                                     0B        buildkit.dockerfile.v0
# <missing>                                                                 2 months ago   USER guest                                                                                          0B        buildkit.dockerfile.v0
# <missing>                                                                 2 months ago   ARG FIRST_FLAG=FCSC{<redacted>}               0B        buildkit.dockerfile.v0
# <missing>                                                                 2 months ago   /bin/sh -c #(nop)  CMD ["/bin/sh"]                                                                  0B
# <missing>                                                                 2 months ago   /bin/sh -c #(nop) ADD file:37a76ec18f9887751cd8473744917d08b7431fc4085097bb6a09d81b41775473 in /    7.38MB
```

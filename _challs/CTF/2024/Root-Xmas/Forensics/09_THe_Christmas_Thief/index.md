---
layout: Post
format: chall
title: Day 09 - THe Christmas Thief
date: 2024-12-11
ctf: Root-Xmas
tags: [Wireshark, mRemotEng]
category: [Forensics]
---
# Day 09 - THe Christmas Thief

<a class="back-link" href="../../">< Go back</a>

## Description

A colleague of yours forgot to lock his workstation during his coffee break, and when he returns he discovers that some of his files have been looked at, and maybe even stolen! He's really sad, because he had prepared some superb memes for Christmas, but more importantly, he also had sensitive information about the Root-Me infrastructure... Luckily for you, the network survey has captured what happened, so it's now your turn to find out what was stolen!

Author : Nishacid

We are provided with a pcapng containing lots of traffic.

## Challenge

Because we are told that files have been looked at and maybe stolen, let's directly focus on the wireshark feature `File` > `Export Objects` > `HTTP...` to extract all files transferred over HTTP.

After looking carefully at them, we find one of interest `upload(4)` it contains some multi-part/form-data contents being transfered.

We see a XML file named `confCons.xml` that refer to a program called <http://mremoteng.org> it's a remote connections manager.

The tool has password hashes, after looking around online it seems they are AES with salt, but with very poor security, the salt is always `mR3m`.

Let's lazily take the first program that offers to decrypt it <https://github.com/gquere/mRemoteNG_password_decrypt.git>, and running it gives us the flag `RM{R3m0t3_cLi3Nt_4r3_n0t_S0_s3cur3}`.

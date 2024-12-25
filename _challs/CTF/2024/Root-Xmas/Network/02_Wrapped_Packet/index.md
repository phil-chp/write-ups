---
layout: Post
format: chall
title: Day 02 - Wrapped Packet
date: 2024-12-03
ctf: Root-Xmas
tags: [Wireshark, ICMP]
category: [Network]
---
# Day 02 - Wrapped Packet

<a class="back-link" href="../../">< Go back</a>

## Description

According to our information, one of our auditors' workstations has been compromised, and some even claim that data has been exfiltrated. Here's a network capture from the suspected workstation. Can you confirm the diagnosis made by our experts?

Author: Mika

all files in [resources/](./resources) were provided.

## Challenge

After looking around we find that the ICMP packets are a bit weird, they are supposed to be ping packets but they hide something at the end of each of them, let's use tshark to quickly filter out all of them.

```bash
tshark -2 -R "icmp && ip.src == 10.0.2.15" -r chall.pcapng -w out.log
```

`out.log` contains a lot of binary data, from the wireshark analysis we saw that the footers of the ICMP packets are hex-bytes from that info let's just look at strings, I found that some messages where shorter, but around 4 bytes we get random noise, so let's limit to 8 characters:

```bash
strings out.log -n 8
# 12th Gen Intel(R) Core(TM) i7-12700 (with SSE4.2)
# Linux 6.8.11-amd64
# Dumpcap (Wireshark) 4.2.5 (Git v4.2.5 packaged as 4.2.5-1)
# Linux 6.8.11-amd64
# 4572726f723a20704572726f723a20704572726f
# 696e673a20696e76696e673a20696e76696e673a
#  !"#$%&'()*+,-./01234567

# ...

# 34735f523030542d34735f523030542d34735f52
# 4d337d0a
# 4d337d0a
# 4d337d0a
# Counters provided by dumpcap
```

Okay so we get mostly our hex data, there's a couple of lines that we can remove, and let's try to convert everything into hex (I use cyberchef for example, I did `Fork`, `From Hex`).

At the end of the data we get the following:

```
RM{M3rryRM{M3rryRM{M
_Chr1stM_Chr1stM_Chr
4s_R00T-4s_R00T-4s_R
M3}
```

After a bit of deciphering we get: `RM{M3rry_Chr1stM4s_R00T-M3}`

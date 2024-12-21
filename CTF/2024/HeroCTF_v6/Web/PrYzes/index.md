---
layout: Post
type: chall
---
# PrYzes ⚪

<a class="back-link" href="../../">< Go back</a>

## Description

A Python enthusiast created a website to distribute prizes, but currently, you are unable to claim them. Discover a method to successfully claim a prize and obtain the flag!

URL: <http://web.heroctf.fr:5000>
Author: xanhacks

all files in [resources/](./resources) were provided.

## Challenge

Just by doing some static analysis on the API we see that to bypass the connection we just need to claim our prize with a date with a year `> 2100`:

```
So change the payload to: {"date": "25/10/2101"}
And replace your X-Signature header with the sha256 of the date: b29beec958261da1de51a62a9f90062f70e088123eb78609494d97a9476ea2da
```

Curl or burp suite will do and you get the flag.

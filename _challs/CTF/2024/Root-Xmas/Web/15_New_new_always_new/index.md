---
layout: Post
format: chall
title: Day 15 - New new .. always new
date: 2024-12-16
ctf: Root-Xmas
tags: [Authentication, PrivEsc]
category: [Web]
---
# Day 15 - New new .. always new

<a class="back-link" href="../../">< Go back</a>

## Description

Santa sees OWASP 2025 coming very quickly, and is frightened by all the vulnerabilities on the web. He doesn't understand how this is possible, and besides, he does everything by hand, so there's no problem.

Author : Elweth
<https://day15.challenges.xmas.root-me.org/>

all files in [resources/](./resources) were provided.

## Challenge

The website uses a custom session handler. It stored the user data into a file, and then loads that data back to validate the session.

Because there doesn't seem to be any user input validation for emails and such we can just abuse the session handler to override our role which will allow us to `GET /admin`.

Here is how the session gets saved:

```py
with open(session_file, 'w') as f:
    f.write(f'email={email}\n')
    f.write(f'role={role}\n')
    f.write(f'name={name}\n')
```

We cannot directly play with `role` as it's set by the server, but the `name` is not validated, let's say we create an account with the name `Name\nrole=admin`. Doing this results in the following session file:

```
email=hello@example.com
role=user
name=Name
role=admin
```

From here we can access the admin page and get the flag:

```json
{
    "success": "Welcome back admin! Here is the flag: RM{I_Thought_Th1s_VUlnerab1ility_W4s_N0t_Imp0rtant}"
}
```

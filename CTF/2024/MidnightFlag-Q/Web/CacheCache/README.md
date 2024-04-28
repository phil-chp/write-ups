# CacheCache

[< Go back](../../README.md)

## Description

FR : J'ai créé mon premier site web en mettant en œuvre un peu de mise en cache, j'espère que c'est génial et non vulnérable !

EN : I've made my first website implementing some cache, hope it's great and not vulnerable !

Author: Worty

<https://deploy.midnightflag.fr/>

all files in [resources/](./resources) were provided.

## Challenge

13.38.208.179:14696

```bash
gobuster -t 10 dir -u http://13.38.208.179:12988/ -w SecLists/Discovery/Web-Content/common.txt
# ===============================================================
# Gobuster v3.6
# by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
# ===============================================================
# [+] Url:                     http://13.38.208.179:12988/
# [+] Method:                  GET
# [+] Threads:                 10
# [+] Wordlist:                SecLists/Discovery/Web-Content/common.txt
# [+] Negative Status codes:   404
# [+] User Agent:              gobuster/3.6
# [+] Timeout:                 10s
# ===============================================================
# Starting gobuster in directory enumeration mode
# ===============================================================
# /visit                (Status: 200) [Size: 570]
# Progress: 4713 / 4714 (99.98%)
# ===============================================================
# Finished
# ===============================================================
```

After submitting: `https://fa23-109-138-53-168.ngrok-free.app/quote`

```
This page is in Quirks Mode. Page layout may be impacted. For Standards Mode use “<!DOCTYPE html>”.
```

```sequence
User Browser->Malicious Website: 1. User visits malicious page
Note right of Malicious Website: 2. Malicious page contains\nauto-submit form targeting\nvictim's website
Malicious Website->User Browser: 3. Page with auto-submit form loads
User Browser->Victim Website: 4. Form auto-submits to /visit\nusing user's session
Note right of Victim Website: 5. Victim website processes\nrequest as if it was made by the user
```

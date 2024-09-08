# Le match du siècle 1 ⚪

[< Go back](../../README.md)

## Description

Vous voilà à quelques semaines du match tant attendu entre le Gorfou FC et l'AS Sealion.
Seulement, vous vous êtes pris au dernier moment pour acheter votre place. Trouvez un moyen d'obtenir un billet !

<https://le-match-du-siecle.challenges.404ctf.fr>

all files in [resources/](./resources) were provided.

## Challenge

<img src="assets/landing.jpg" alt="landing" width="600px">

Let's first create an account and login. This is a ticket e-store for a football match, let's try to buy a ticket.

<img src="assets/broke_ass.jpg" alt="no money" width="400px">
<img src="assets/broke_ass_2.jpg" alt="error getting ticket" width="400px">

We don't have enough money to do that, let's intercept the buy request with burp and see what we can do.

In the user cookies we learn of a `balance=0` let's try to set that to a higher value:

<img src="assets/fake_balance_burp.jpg" alt="changing the balance from 0 to 100 in the cookies" width="600px">

And forward the request, it works! We got the ticket

<img src="assets/rich_ass.jpg" alt="yes money" width="400px">
<img src="assets/rich_ass_2.jpg" alt="success getting ticket" width="400px">

Let's "Obtain" it:

<img src="assets/new_ticket.jpg" alt="our tickets" width="600px">

This downloads the flag as a png

<img src="assets/flag.jpg" alt="flag" width="400px">

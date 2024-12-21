---
layout: Post
type: chall
---
# Horreur Maleur 2/5 ⭐⭐

<a class="back-link" href="../../">< Go back</a>

## Lore

Introduction commune à la série Horreur, malheur

Vous venez d'être embauché en tant que Responsable de la Sécurité des Systèmes d'Information (RSSI) d'une entreprise stratégique.

En arrivant à votre bureau le premier jour, vous vous rendez compte que votre prédécesseur vous a laissé une clé USB avec une note dessus : VPN compromis (intégrité). Version 22.3R1 b1647.

Note : La première partie (Archive chiffrée) débloque les autres parties, à l'exception de la seconde partie (Accès initial) qui peut être traitée indépendamment. Nous vous recommandons de traiter les parties dans l'ordre.

## Description

Sur la clé USB, vous trouvez deux fichiers : une archive chiffrée et les journaux de l'équipement. Vous focalisez maintenant votre attention sur les journaux. L'équipement étant compromis, vous devez retrouver la vulnérabilité utilisée par l'attaquant ainsi que l'adresse IP de ce dernier.

Le flag est au format : FCSC{CVE-XXXX-XXXXX:<adresse_IP>}.
all files in [resources/](./resources) were provided.

## Challenge

In the lore we see a specific version, online we find CVE-2023-46805

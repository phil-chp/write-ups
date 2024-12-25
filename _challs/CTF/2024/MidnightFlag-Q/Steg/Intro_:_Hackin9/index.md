---
layout: Post
format: chall
title: Hackin9
date: 2024-04-27
ctf: MidnightFlag Qualifiers
tags: [binary]
category: [Steganography]
---
# Intro : Hackin9

<a class="back-link" href="../../">< Go back</a>

## Description

FR : Tr0p b1en un l1vr3 de H4CK3R !

EN : N1c3 ! A H4CK3R b00k !

Author : Kuorashi

all files in [resources/](./resources) were provided.

## Challenge

Message on the image:

```
mEcaNIsMe De secURiTe SoUs anDroiD.
ResTAUReR LeS symbOleS De DebOgaGE
a pARtIR dE BInaIrES COMpIleS sTatiQUement.
AUToMaTisER l'eXPlOITatIon De VULNÉrABiLiTé lORs d'Un TeSt D'INTRuSIon.
rEMoTE dOWNLoAD eXEcUtIOn avEc jAVa : UTiliSAtiOn Et PrOTECTiON.
WindowS Fe LIVE cD D'InVeStIGAtiOn iNfORMATiQUe winDoWS-Pe.
LA seCUrITE DeS ReSeaUx BLUEToO.
```

Trough Cyberchef:

```
Find_/_Replace({'option':'Regex','string':'[A-Z]'},'1',true,false,true,false)
Find_/_Replace({'option':'Regex','string':'[a-z]'},'0',true,false,true,false)
Find_/_Replace({'option':'Regex','string':'[\'\\:\\-\\.\\n ]'},'',true,false,true,false)
From_Binary('Space',8)
```

Gives the flag (uppercase = 1, lowercase = 0, just remove the rest)

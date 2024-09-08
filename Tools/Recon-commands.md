# Recon commands

Scan IP for services and directly looksup in searchsploit.

```bash
sudo nmap -sSV -v <IP> -oX /tmp/nmap-report.xml && searchsploit -v --nmap /tmp/nmap-report.xml | tee /tmp/searchsploit-report.txt
```

Find all files with SUID bit set.

```bash
find / -perm -u=s -type f 2>/dev/null
```

`cp` alternative with `pv` for large files (`SP`: source path, `DP`: dest path, `F`: file)

```bash
SP="/home/kali/"; DP="/home/kali/Desktop"; F="foo.txt"; pv -s $(stat -f%z "$SP$F") "$SP$F" > "$DP$F"
```

view user-installed apt packages on kali (helps when kali in need of a re-dump)

```bash
apt list --installed 2>/dev/null | grep -vE "kali\-rolling|gnome\-|Listing\.\.\." | cut -d'/' -f 1 # | grep -vE "<extra filters>"
```

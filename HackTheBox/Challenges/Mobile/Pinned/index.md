---
layout: Post
type: chall
---
# Pinned 🟡

<a class="back-link" href="../../../">< Go back</a>

## Description

This app has stored my credentials and I can only login automatically. I tried to intercept the login request and restore my password, but this seems to be a secure connection. Can you help bypass this security restriction and intercept the password in plaintext?

APK was provided.

## Challenge

Running the .apk on a Android emulator with:

- API 29 (Specified by the app)
- Root
- Burp Suite's CA as System Certificate
- Frida server

We can run any SSL pinning bypass script (i.e. <https://codeshare.frida.re/@sowdust/universal-android-ssl-pinning-bypass-2/>) on our machine to bypass the SSL Pinning on `com.example.pinned` (i.e. the installed APK) and view the `POST pinned.com` request in Burp Suite with as the password, the flag.

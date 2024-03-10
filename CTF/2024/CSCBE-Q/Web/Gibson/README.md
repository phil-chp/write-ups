# Gibson ⭐

[< Go back](../../README.md)

## Description

Pretend it's 1999 and hack the Gibson!

[index.html](./index.html) was provided

## Challenge

Grab the `<script>` tag from the HTML file, deobfuscate it using [deobfuscate.io](https://obf-io.deobfuscate.io/), you get a readable JS function:

```js
function c() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "ZeroCool" && password === "secret") {
    alert("CSC{IH4ck3dTh3G1bs0n!}");
  } else {
    alert("Access denied");
  }
}
```

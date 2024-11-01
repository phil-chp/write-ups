# AutoInfector ⚪

[< Go back](../../README.md)

## Description

Upon exploring shadowy online forums, you stumbled upon an article detailing a freshly emerged malware reseller. Your mission, spread across three challenges, is to download and analyze the multi-stage malware. To claim the first flag, find a method to download a beta version of this malware.

URL: <http://shop.capturetheflag.fr>
Author : xanhacks

Files in [resources/](./resources) were extracted from the website.

## Challenge

Going on the website, we see two specific scripts being loaded, let's download them.

[md5.js](./resources/md5.js) just looks like a very complete implementation of md5 and extra useful tools, let's ignore it for now.

[scripts.js](./resources/scripts.js) is a bit more interesting, it's obfuscated, let's deobfuscate it with online tools. Like 99% of these easy reverse JS challenges, it uses `https://obf-io.deobfuscate.io/`, we get a more coherent script.

After manually renaming some variables to make sense, we get the following intersting function:

```js
document.getElementById("download-malware").onclick = function () {
    const title = document.title.split(" - ")[0]; // AutoInfector - Beta
    const titleMD5 = hex_md5(title);
    const userInput = prompt("Enter the password to download the malware:");
    if (!userInput) return;

    const userMD5 = hex_md5(userInput);
    const xorPWDs = xorStrHex(titleMD5, userMD5);
    if (xorPWDs === "11dfc83092be6f72c7e9e000e1de2960") {
      alert("You can validate the challenge with the following flag: Hero{" + userInput + '}');
      window.location.href = '/' + userInput + '.exe';
    } else {
      alert("Wrong password!");
    }
  };
```

So our flag is an unknown password which is beinh compared to a user inputed password that is xor'd with the website title, funily enough we went from 99% security with MD5 to 0% with the XOR.

Because XOR is fully reversible, this means `a ^ b = c` and `a ^ c = b`.

The website title is "AutoInfector - Beta", the MD5 of the first part is `e3df2713dfaefd4badf9b892ba54245f`

We can now xor this MD5 with the final hash, we can directly use their own xor function in a browser console or a node environment:

```js
function xorStrHex(_0x44beee, _0x331942) {
    var _0x3e3a86 = '';
    for (var _0x192d0c = 0x0; _0x192d0c < _0x44beee.length; _0x192d0c++) {
      _0x3e3a86 += (parseInt(_0x44beee[_0x192d0c], 0x10) ^ parseInt(_0x331942[_0x192d0c], 0x10)).toString(0x10);
    }
    return _0x3e3a86;
  }
console.log(xorStrHex("e3df2713dfaefd4badf9b892ba54245f", "11dfc83092be6f72c7e9e000e1de2960"))
// f200ef234d1092396a1058925b8a0d3f
```

Going onto crackstation.net and submitting our new MD5 we get a match: `infectedmushroom`

From this we have the flag `Hero{infectedmushroom}`, and `infectedmushroom.exe` file to download for step 2.

----

I've renamed the file to `.exe.bin` to prevent any accidental execution. As just looking forwards a bit we understand it's a C2 malware file.

function xorStrHex(_0x44beee, _0x331942) {
    var _0x3e3a86 = '';
    for (var _0x192d0c = 0x0; _0x192d0c < _0x44beee.length; _0x192d0c++) {
      _0x3e3a86 += (parseInt(_0x44beee[_0x192d0c], 0x10) ^ parseInt(_0x331942[_0x192d0c], 0x10)).toString(0x10);
    }
    return _0x3e3a86;
  }
  function toHex(_0x54809b) {
    var _0x253551 = '';
    for (var _0x2225ca = 0x0; _0x2225ca < _0x54809b.length; _0x2225ca++) {
      _0x253551 += '' + _0x54809b.charCodeAt(_0x2225ca).toString(0x10);
    }
    return _0x253551;
  }
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

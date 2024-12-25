function c() {
  var username = document.getElementById("username").value;
  var passwordd = document.getElementById("password").value;
  if (username === "ZeroCool" && passwordd === "secret") {
    alert("CSC{IH4ck3dTh3G1bs0n!}");
  } else {
    alert("Access denied");
  }
}
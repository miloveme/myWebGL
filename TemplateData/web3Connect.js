if (window.klaytn) {
  caver = new Caver(window.klaytn);
  // connect popup
  klaytn.enable();

  window.klaytn.on("accountsChanged", function () {
    location.reload();
  });

} else {
  alert("Non-Klaytn browser detected. Please connect to a wallet");
}

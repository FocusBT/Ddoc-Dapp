const createKeccakHash = require("keccak");

function toChecksumAddress(address) {
  address = address.toString().toLowerCase().replace("0x", "");
  var hash = createKeccakHash("keccak256").update(address).digest("hex");
  var ret = "0x";

  for (var i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toString().toUpperCase();
    } else {
      ret += address[i];
    }
  }

  return ret;
}

// toChecksumAddress(0x84033cfB66a69c39Fd3Da507e3b5F475CA6a7fc1);

console.log(toChecksumAddress("0x84033cfb66a69c39fd3da507e3b5f475ca6a7fc1"));

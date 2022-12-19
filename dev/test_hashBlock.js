// ------------------------------------------------------
// Test for the hash function
// ------------------------------------------------------

const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

console.log(bitcoin); // print the genesis block

const previousBlockHash = "3u298u9j5e23";

const currentBlockData = [
  {
    amount: 10,
    sender: "Nrj2j9r83qr2",
    recipient: "fjaiwejfaewjo",
  },
  {
    amount: 30,
    sender: "022j9r83qr2",
    recipient: "02aiwejfaewjo",
  },
  {
    amount: 200,
    sender: "903j2j9r83qr2",
    recipient: "03sfjaiwejfaewjo",
  },
];

const nonce = 5686;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

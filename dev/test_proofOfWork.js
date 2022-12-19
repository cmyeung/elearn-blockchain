// ------------------------------------------------------
// Test for the Proof of Work
// ------------------------------------------------------

const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

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

const nonce = 100;

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

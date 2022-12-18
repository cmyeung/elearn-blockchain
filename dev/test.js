// ------------------------------------------------------
// Test for the Proof of Work
// ------------------------------------------------------

// const Blockchain = require("./blockchain");

// const bitcoin = new Blockchain();

// const previousBlockHash = "3u298u9j5e23";

// const currentBlockData = [
//   {
//     amount: 10,
//     sender: "Nrj2j9r83qr2",
//     recipient: "fjaiwejfaewjo",
//   },
//   {
//     amount: 30,
//     sender: "022j9r83qr2",
//     recipient: "02aiwejfaewjo",
//   },
//   {
//     amount: 200,
//     sender: "903j2j9r83qr2",
//     recipient: "03sfjaiwejfaewjo",
//   },
// ];

// const nonce = 100;

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

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

// ------------------------------------------------------
// Test for the block and transaction creation
// ------------------------------------------------------

// const Blockchain = require("./blockchain");
// const bitcoin = new Blockchain();

// bitcoin.hashBlock();
// bitcoin.createNewBlock(123123, "AEWJROIAWJ3", "32J32DJDEW3D");

// bitcoin.createNewTransaction(100, "ALEX32d3232", "JEN32d3389ud93");
// bitcoin.createNewBlock(322, "dj329jd32", "j389dj3289d3");

// bitcoin.createNewTransaction(50, "ALEX32d3232", "JEN32d3389ud93");
// bitcoin.createNewTransaction(300, "ALEX32d3232", "JEN32d3389ud93");
// bitcoin.createNewTransaction(2000, "ALEX32d3232", "JEN32d3389ud93");
// bitcoin.createNewBlock(322, "dj329jd325", "j389dj3289d4");

// console.log(bitcoin, bitcoin.chain[2]);

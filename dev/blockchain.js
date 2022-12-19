const sha256 = require("sha256");
const currentNodeUrl = process.argv[3];
const { v1: uuidv1 } = require("uuid");

function Blockchain() {
  this.chain = [];
  this.pendingTractions = [];

  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];

  // Initialize block chains with Genesis Block
  this.createNewBlock(100, "0", "0");
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTractions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash,
  };

  this.pendingTractions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTractions = {
    amount: amount,
    sender: sender,
    recipient: recipient,
    transactionId: uuidv1().split("-").join(""),
  };

  return newTractions;
};

Blockchain.prototype.addTransactionToPendingTransactions = function (
  transactionObj
) {
  this.pendingTractions.push(transactionObj);
  return this.getLastBlock()["index"] + 1;
};

Blockchain.prototype.hashBlock = function (
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);

  return hash;
};

Blockchain.prototype.proofOfWork = function (
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  }

  return nonce;
};

Blockchain.prototype.chainIsValid = function (blockchain) {
  let validChain = true;

  for (var i = 1; i < blockchain.length; ++i) {
    const currentBlock = blockchain[i];
    const prevBlock = blockchain[i - 1];
    const blockHash = this.hashBlock(
      prevBlock["hash"],
      {
        transactions: currentBlock["transactions"],
        index: currentBlock["index"],
      },
      currentBlock["nonce"]
    );

    // DEBUG
    // console.log("--------------------------------------");
    // console.log(`prevBlock = ${prevBlock["hash"]}`);
    // console.log(`currBlock = ${currentBlock["previousBlockHash"]}`);
    // console.log(
    //   `currentBlock = ${currentBlock["transactions"]}, ${currentBlock["index"]}, ${currentBlock["nonce"]}`
    // );
    // console.log(`blockHash = ${blockHash}`);

    if (blockHash.substring(0, 4) !== "0000") validChain = false;
    if (currentBlock["previousBlockHash"] !== prevBlock["hash"])
      validChain = false;
  }

  // DEBUG
  // console.log(`1.1 = ${validChain}`);

  const genesisBlock = blockchain[0];
  const correctNonce = genesisBlock["nonce"] === 100;
  const correctPreviousBlockHash = genesisBlock["previousBlockHash"] === "0";
  const correctHash = genesisBlock["hash"] === "0";
  const correctTransactions = genesisBlock["transactions"].length === 0;

  // DEBUG
  // console.log(`2.1 = ${correctNonce}`);
  // console.log(`2.2 = ${correctPreviousBlockHash}`);
  // console.log(`2.3 = ${correctHash}`);
  // console.log(`2.4 = ${correctTransactions}`);

  if (
    !correctNonce ||
    !correctPreviousBlockHash ||
    !correctHash ||
    !correctTransactions
  )
    validChain = false;

  return validChain;
};

Blockchain.prototype.getBlock = function (blockHash) {
  let correctBlock = null;
  this.chain.forEach((block) => {
    if (block.hash === blockHash) correctBlock = block;
  });
  return correctBlock;
};

Blockchain.prototype.getTransaction = function (transactionId) {
  let correctBlock = null;
  let correctTransaction = null;

  this.chain.forEach((block) => {
    block.transactions.forEach((transaction) => {
      if (transaction.transactionId === transactionId) {
        correctTransaction = transaction;
        correctBlock = block;
      }
    });
  });

  return {
    transaction: correctTransaction,
    block: correctBlock,
  };
};

Blockchain.prototype.getAddressData = function (address) {
  const addressTransactions = [];
  this.chain.forEach((block) => {
    block.transactions.forEach((transaction) => {
      if (transaction.sender === address || transaction.recipient === address) {
        addressTransactions.push(transaction);
      }
    });
  });

  let balance = 0;
  addressTransactions.forEach((transaction) => {
    if (transaction.recipient === address) balance += transaction.amount;
    else if (transaction.sender === address) balance -= transaction.amount;
  });

  return {
    addressTransactions: addressTransactions,
    addressBalance: balance,
  };
};

module.exports = Blockchain;

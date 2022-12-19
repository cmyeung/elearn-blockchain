// ------------------------------------------------------
// Test for the valid chain function
// ------------------------------------------------------

const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestemp: 1671383952334,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestemp: 1671383981420,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestemp: 1671383981799,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "17205ee07ef811ed8270db6d6914a69f",
          transactionId: "287727007ef811ed8270db6d6914a69f",
        },
        {
          amount: 12.5,
          sender: "00",
          recipient: "17205ee07ef811ed8270db6d6914a69f",
          transactionId: "287727007ef811ed8270db6d6914a69f",
        },
      ],
      nonce: 22118,
      hash: "00007294c703e344b154d6c7b3e866fd6337c56974117842b3c8db77da438372",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestemp: 1671383982666,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "17205ee07ef811ed8270db6d6914a69f",
          transactionId: "28b0ad907ef811ed8270db6d6914a69f",
        },
        {
          amount: 12.5,
          sender: "00",
          recipient: "17205ee07ef811ed8270db6d6914a69f",
          transactionId: "28b0ad907ef811ed8270db6d6914a69f",
        },
      ],
      nonce: 150629,
      hash: "00006542334c26ccd571411572f8c6b849d6d89245b2b831816eb10a5756664c",
      previousBlockHash:
        "00007294c703e344b154d6c7b3e866fd6337c56974117842b3c8db77da438372",
    },
    {
      index: 5,
      timestemp: 1671383983500,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "17205ee07ef811ed8270db6d6914a69f",
          transactionId: "2934f8c07ef811ed8270db6d6914a69f",
        },
        {
          amount: 12.5,
          sender: "00",
          recipient: "17205ee07ef811ed8270db6d6914a69f",
          transactionId: "2934f8c07ef811ed8270db6d6914a69f",
        },
      ],
      nonce: 68956,
      hash: "000017bfc61c8d66d4b5fd8fc9c9ba4c46a2247c3273e3bbd11c142333e94551",
      previousBlockHash:
        "00006542334c26ccd571411572f8c6b849d6d89245b2b831816eb10a5756664c",
    },
  ],
  pendingTractions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "17205ee07ef811ed8270db6d6914a69f",
      transactionId: "29b43ae07ef811ed8270db6d6914a69f",
    },
  ],
  currentNodeUrl: "http://localhost:3003",
  networkNodes: [
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3004",
    "http://localhost:3005",
  ],
};

console.log("Valid: ", bitcoin.chainIsValid(bc1.chain));

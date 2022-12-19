// ------------------------------------------------------
// Test for the block and transaction creation
// ------------------------------------------------------

const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

bitcoin.createNewBlock(123123, "AEWJROIAWJ3", "32J32DJDEW3D");

bitcoin.createNewTransaction(100, "ALEX32d3232", "JEN32d3389ud93");
bitcoin.createNewBlock(322, "dj329jd32", "j389dj3289d3");

bitcoin.createNewTransaction(50, "ALEX32d3232", "JEN32d3389ud93");
bitcoin.createNewTransaction(300, "ALEX32d3232", "JEN32d3389ud93");
bitcoin.createNewTransaction(2000, "ALEX32d3232", "JEN32d3389ud93");
bitcoin.createNewBlock(322, "dj329jd325", "j389dj3289d4");

console.log(bitcoin, bitcoin.chain[2]);

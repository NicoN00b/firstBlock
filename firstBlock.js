const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(index, timestamp, data, previousHash = ''){
  this.index = index;
  this.timestamp = timestamp;
  this.data = data;
  this.previousHash = previousHash;
  this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new Block(0, "02/01/2018", "Genesis Block", "0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length -1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock)
  };
}

let nicoCoin = new Blockchain();
nicoCoin.addBlock(new Block(1, "02/01/17", { amount: 4}));
nicoCoin.addBlock(new Block(2, "04/01/17", { amount: 8}));

console.log(JSON.stringify(nicoCoin, null, 4));

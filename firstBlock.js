const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(index, timestamp, data, previousHash = ''){
  this.index = index;
  this.timestamp = timestamp;
  this.data = data;
  this.previousHash = previousHash;
  this.hash = '';
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
    retunr new Block(0, "01/02/2018", "Genesis Block", "0");
  }
}

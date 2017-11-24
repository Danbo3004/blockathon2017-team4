const Web3 = require('web3');

const ethNodeProvider = require('../../configs/eth-node-provider');

const web3 = new Web3(new Web3.providers.HttpProvider(ethNodeProvider.httpDomain));
module.exports = web3;

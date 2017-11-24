const ethNode = require('../server/boot/eth-node-init');

module.exports = {
  web3: ethNode,
  eth: ethNode.eth,
  defaultAccount: {
    address: '0x8a3A075B995bfdeCC05931CAc304BCc46C83c075',
    password: '123456789'
  }
}

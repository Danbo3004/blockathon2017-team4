const _ = require('underscore');
const async = require('async');
const globals = require('../../server/boot/globals');
const EthereumTx = require('ethereumjs-tx');

module.exports = function(Util) {
  Util.disableRemoteMethodByName('create');
  Util.disableRemoteMethodByName('count');
  Util.disableRemoteMethodByName('destroyById');
  Util.disableRemoteMethodByName('destroyAll');
  Util.disableRemoteMethodByName('findOne');
  Util.disableRemoteMethodByName('updateAll');
  Util.disableRemoteMethodByName('upsert');
  Util.disableRemoteMethodByName('upsertWithWhere');
  Util.disableRemoteMethodByName('replaceById');
  Util.disableRemoteMethodByName('replaceOrCreate');
  Util.disableRemoteMethodByName('findOrCreate');
  Util.disableRemoteMethodByName('updateAttribute');
  Util.disableRemoteMethodByName('updateAttributes');
  Util.disableRemoteMethodByName('destroy');
  Util.disableRemoteMethodByName('replaceAttributes');
  Util.disableRemoteMethodByName('createChangeStream');
  Util.disableRemoteMethodByName('prototype.patchAttributes');

  //Util.disableRemoteMethodByName('find');
  Util.disableRemoteMethodByName('findById');
  Util.disableRemoteMethodByName('replaceById');
  Util.disableRemoteMethodByName('exists');

  Util.remoteMethod('checkEthBalance', {
    accepts: {arg: 'address', type: 'string', required: true},
    http: {
      verb: 'get'
    },
    returns: {
      root: true, type: 'string'
    }
  })
  Util.checkEthBalance = function(address, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(address)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    globals['eth-node'].eth.getBalance(address, cb);
  }

  Util.remoteMethod('checkTokenBalance', {
    accepts: {arg: 'address', type: 'string', required: true},
    http: {
      verb: 'get'
    },
    returns: {
      root: true, type: 'string'
    }
  })
  Util.checkTokenBalance = function(address, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(address)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    const contract = globals['deployed-contracts'].token();
    contract.methods['balanceOf'](address).call({}, cb);
  }

  Util.remoteMethod('deployContract', {
    accepts: [
      {arg: 'contractName', type: 'string', required: true},
      {arg: 'args', type: 'array'}
    ],
    http: {
      verb: 'get'
    },
    returns: {
      arg: 'transactionHash', type: 'string'
    }
  })
  Util.deployContract = function(contractName, args, cb) {
    if (!globals['smart-contracts'][contractName]) {
      let err = new Error('contract name not found');
      err.statusCode = 404;
      cb(err);
      return;
    }
    const bytecode = globals['smart-contracts'][contractName].bytecode;
    const abi = globals['smart-contracts'][contractName].abi;
    const contract = new globals['eth-node'].eth.Contract(abi);
    const deployingContract = contract.deploy({
      data: bytecode,
      arguments: args
    });
    async.auto({
      getGasPrice: function(callback) {
        globals['eth-node'].eth.getGasPrice(callback);
      },
      getEstimateGas: function(callback) {
        deployingContract.estimateGas({}, callback);
      },
      unlockAccount: ['getGasPrice', 'getEstimateGas', function(data, callback) {
        globals['eth-node'].eth.personal.unlockAccount(globals['eth-node'].defaultAccount.address, globals['eth-node'].defaultAccount.password, 1000, callback);
      }]
    }, (err, results) => {
      if(err) {
        console.error(err);
        cb(err);
        return;
      }
      //deploy
      deployingContract.send({
        from: globals['eth-node'].defaultAccount.address,
        gas: results['getEstimateGas'],
        gasPrice: results['getGasPrice']
      }, cb)
        .once('receipt', receipt => {
          console.log('deploy contract receipt: ' + receipt.transactionHash);
        })
    })
  }

  Util.remoteMethod('callMethod', {
    accepts: [
      {arg: 'address', type: 'string', required: true},
      {arg: 'contractName', type: 'string', required: true},
      {arg: 'methodName', type: 'string', required: true},
      {arg: 'args', type: 'array'}
    ],
    http: {
      verb: 'get'
    },
    returns: {
      root: true, type: 'object'
    }
  })
  Util.callMethod = function(address, contractName, methodName, args, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(address)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    if (!globals['smart-contracts'][contractName]) {
      let err = new Error('contract name not found');
      err.statusCode = 404;
      cb(err);
      return;
    }
    const abi = globals['smart-contracts'][contractName].abi;
    const contract = new globals['eth-node'].eth.Contract(abi, address);
    if (!contract.methods[methodName]) {
      let err = new Error('method name not found');
      err.statusCode = 404;
      cb(err);
      return;
    }
    contract.methods[methodName].apply(contract.methods[methodName], args).call({}, cb);
  }

  Util.remoteMethod('transferEth', {
    accepts: [
      {arg: 'to', type: 'address', required: true},
      {arg: 'wei', type: 'string', required: true},
      {arg: 'req', type: 'object', 'http': {source: 'req'}}
    ],
    http: {
      verb: 'post'
    },
    returns: {
      arg: 'transactionHash', type: 'string'
    }
  })
  Util.transferEth = function(to, wei, req, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(to)) {
      let err = new Error('Receiver address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    if (!req.accessToken) {
      let err = new Error('Authentication is required');
      err.statusCode = 401;
      cb(err);
      return;
    }
    async.auto({
      getUser: function(callback) {
        Util.app.models.user.findById(req.accessToken.userId, (err, user) => {
          if (err) {
            callback(err);
            return;
          }
          if (!user) {
            let err = new Error('No user found');
            err.statusCode = 404;
            callback(err);
            return;
          }
          callback(null, user);
        });
      },
      signTransaction: ['getUser', function(data, callback) {
        Util.signTransaction(data['getUser'].privateKey, to, wei, null, callback);
      }],
      sendSignedTransaction: ['signTransaction', function(data, callback) {
        globals['eth-node'].eth.sendSignedTransaction(data['signTransaction'], callback)
          .once('receipt', receipt => console.log('Send ETH transaction hash: ' + receipt.transactionHash))
      }]
    }, (err, results) => {
      cb(err, results['sendSignedTransaction']);
    })
  }

  Util.remoteMethod('signTransaction', {
    accepts: [
      {arg: 'privateKey', type: 'string', required: true},
      {arg: 'to', type: 'string', required: true},
      {arg: 'value', type: 'string', required: true},
      {arg: 'data', type: 'string'}
    ],
    http: {
      verb: 'get'
    },
    returns: {
      arg: 'signedData', type: 'string'
    }
  })
  Util.signTransaction = function(privateKey, to, value, data, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(to)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    async.auto({
      getNonce: function(callback) {
        const account = globals['eth-node'].eth.accounts.privateKeyToAccount(privateKey);
        globals['eth-node'].eth.getTransactionCount(account.address, callback);
      },
      getGasPrice: function(callback) {
        globals['eth-node'].eth.getGasPrice(callback);
      }
    }, (err, results) => {
      if (err) {
        cb(err);
        return;
      }
      privateKey = Buffer.from(privateKey.length === 66 ? privateKey.slice(2) : privateKey, 'hex');
      const txData = {
        nonce: globals['eth-node'].web3.utils.toHex(results['getNonce']),
        gasPrice: globals['eth-node'].web3.utils.toHex(results['getGasPrice']),
        value: globals['eth-node'].web3.utils.toHex(value),
        to: to,
        data: data
      };
      const tempTx = new EthereumTx(txData);
      txData.gas = globals['eth-node'].web3.utils.toHex(parseInt(tempTx.getBaseFee().toString()) + 500000);
      const tx = new EthereumTx(txData);
      tx.sign(privateKey);
      cb(null, '0x' + tx.serialize().toString('hex'));
    })
  }

  Util.remoteMethod('sendMethod', {
    accepts: [
      {arg: 'address', type: 'string', required: true},
      {arg: 'contractName', type: 'string', required: true},
      {arg: 'methodName', type: 'string', required: true},
      {arg: 'args', type: 'array'},
      {arg: 'req', type: 'object', 'http': {source: 'req'}}
    ],
    http: {
      verb: 'post'
    },
    returns: {
      arg: 'transactionHash', type: 'string'
    }
  })
  Util.sendMethod = function(address, contractName, methodName, args, req, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(address)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    if (!req.accessToken) {
      let err = new Error('Authentication is required');
      err.statusCode = 401;
      cb(err);
      return;
    }
    async.auto({
      getUser: function(callback) {
        Util.app.models.user.findById(req.accessToken.userId, (err, user) => {
          if (err) {
            callback(err);
            return;
          }
          if (!user) {
            let err = new Error('No user found');
            err.statusCode = 404;
            callback(err);
            return;
          }
          callback(null, user);
        });
      },
      // signTransaction: ['getUser', function(data, callback) {
      //   Util.signTransaction(data['getUser'].privateKey, address, 0, getSendMethodData(address, contractName, methodName, args), callback);
      // }],
      // sendSignedTransaction: ['signTransaction', function(data, callback) {
      //   globals['eth-node'].eth.sendSignedTransaction(data['signTransaction'], callback)
      //     .once('receipt', receipt => console.log('Send method transaction hash: ' + receipt.transactionHash))
      // }],
      sendTransaction: ['getUser', function(data, callback) {
        Util.sendMethodByPrivateKey(data['getUser'].privateKey, address, contractName, methodName, args, callback);
      }]
    }, (err, results) => {
      cb(err, results['sendTransaction']);
    })
  }

  Util.sendMethodByPrivateKey = function(privateKey, contractAddress, contractName, methodName, args, cb)
  {
    console.log(privateKey + contractAddress + contractName );
    console.log(args);
    async.auto({
      signTransaction: function(callback) {
        if (!globals['eth-node'].web3.utils.isAddress(contractAddress)) {
          let err = new Error('Address is not valid');
          err.statusCode = 400;
          cb(err);
          return;
        }
        if (!globals['smart-contracts'][contractName]) {
          let err = new Error('contract name not found');
          err.statusCode = 404;
          cb(err);
          return;
        }
        const abi = globals['smart-contracts'][contractName].abi;
        const contract = new globals['eth-node'].eth.Contract(abi, contractAddress);
        if (!contract.methods[methodName]) {
          let err = new Error('method name not found');
          err.statusCode = 404;
          cb(err);
          return;
        }
        var data =  contract.methods[methodName].apply(contract.methods[methodName], args).encodeABI();

        Util.signTransaction(privateKey, contractAddress, 0, data, callback);
      },
      sendSignedTransaction: ['signTransaction', function(data, callback) {
        globals['eth-node'].eth.sendSignedTransaction(data['signTransaction'], callback)
          .once('receipt', receipt => console.log('Send method transaction hash: ' + receipt.transactionHash))
      }]
    }, (err, results) => {
      cb(err, results['sendSignedTransaction']);
    })
  }

  function getSendMethodData(contractAddress, contractName, methodName, args) {
    if (!globals['eth-node'].web3.utils.isAddress(contractAddress)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    if (!globals['smart-contracts'][contractName]) {
      let err = new Error('contract name not found');
      err.statusCode = 404;
      cb(err);
      return;
    }
    const abi = globals['smart-contracts'][contractName].abi;
    const contract = new globals['eth-node'].eth.Contract(abi, contractAddress);
    if (!contract.methods[methodName]) {
      let err = new Error('method name not found');
      err.statusCode = 404;
      cb(err);
      return;
    }
    return contract.methods[methodName].apply(contract.methods[methodName], args).encodeABI();
  }

  Util.getCurrentBlockNumber = function(cb){
    globals['eth-node'].eth.getBlockNumber(cb);
  }
}

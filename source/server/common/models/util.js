const _ = require('underscore');
const async = require('async');
const globals = require('../../server/boot/globals');

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

  Util.remoteMethod('checkBalance', {
    accepts: {arg: 'address', type: 'string', required: true},
    http: {
      verb: 'get'
    },
    returns: {
      root: true, type: 'string'
    }
  })
  Util.checkBalance = function(address, cb) {
    if (!globals['eth-node'].web3.utils.isAddress(address)) {
      let err = new Error('Address is not valid');
      err.statusCode = 400;
      cb(err);
      return;
    }
    globals['eth-node'].eth.getBalance(address, cb);
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
}

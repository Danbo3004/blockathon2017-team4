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
}

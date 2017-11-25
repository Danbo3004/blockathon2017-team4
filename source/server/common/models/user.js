'use strict';
const globals = require('../../server/boot/globals');
const async = require('async');
const _ = require('underscore');

module.exports = function(User) {
  //User.disableRemoteMethodByName('create');
  //User.disableRemoteMethodByName('count');
  User.disableRemoteMethodByName('destroyById');
  User.disableRemoteMethodByName('destroyAll');
  User.disableRemoteMethodByName('findOne');
  User.disableRemoteMethodByName('updateAll');
  User.disableRemoteMethodByName('upsert');
  User.disableRemoteMethodByName('upsertWithWhere');
  User.disableRemoteMethodByName('replaceById');
  User.disableRemoteMethodByName('replaceOrCreate');
  User.disableRemoteMethodByName('findOrCreate');
  User.disableRemoteMethodByName('updateAttribute');
  User.disableRemoteMethodByName('updateAttributes');
  User.disableRemoteMethodByName('destroy');
  User.disableRemoteMethodByName('replaceAttributes');
  User.disableRemoteMethodByName('createChangeStream');
  User.disableRemoteMethodByName('prototype.patchAttributes');

  //User.disableRemoteMethodByName('find');
  User.disableRemoteMethodByName('findById');
  User.disableRemoteMethodByName('replaceById');
  User.disableRemoteMethodByName('exists');

  User.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      if (!ctx.instance.id) {
        ctx.instance.created = Math.floor(Date.now() / 1000);
      }
      ctx.instance.modified = Math.floor(Date.now() / 1000);
      if (!_.isEmpty(ctx.currentInstance) && !_.isEmpty(ctx.currentInstance.created) && !_.isEmpty(ctx.instance.created)) {
        ctx.instance.created = ctx.currentInstance.created;
      }
    } else {
      ctx.data.modified = Math.floor(Date.now() / 1000);
      if (!_.isEmpty(ctx.currentInstance) && (ctx.currentInstance.created) && (ctx.data.created)) {
        ctx.data.created = ctx.currentInstance.created;
      }
    }
    next();
  });
  User.beforeCreate = function(next, instance) {
    // create ethereum account
    const entropy = globals['eth-node'].web3.utils.randomHex(32);
    const account = globals['eth-node'].eth.accounts.create(entropy);
    instance.address = account.address;
    instance.privateKey = account.privateKey;
    instance.entropy = entropy;
    next();
  }
};

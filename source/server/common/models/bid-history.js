'use strict';
const globals = require('../../server/boot/globals');
const async = require('async');
const _ = require('underscore');

module.exports = function(BidHistory) {
  //BidHistory.disableRemoteMethodByName('create');
  BidHistory.disableRemoteMethodByName('count');
  BidHistory.disableRemoteMethodByName('destroyById');
  BidHistory.disableRemoteMethodByName('destroyAll');
  BidHistory.disableRemoteMethodByName('findOne');
  BidHistory.disableRemoteMethodByName('updateAll');
  BidHistory.disableRemoteMethodByName('upsert');
  BidHistory.disableRemoteMethodByName('upsertWithWhere');
  BidHistory.disableRemoteMethodByName('replaceById');
  BidHistory.disableRemoteMethodByName('replaceOrCreate');
  BidHistory.disableRemoteMethodByName('findOrCreate');
  BidHistory.disableRemoteMethodByName('updateAttribute');
  BidHistory.disableRemoteMethodByName('updateAttributes');
  BidHistory.disableRemoteMethodByName('destroy');
  BidHistory.disableRemoteMethodByName('replaceAttributes');
  BidHistory.disableRemoteMethodByName('createChangeStream');
  BidHistory.disableRemoteMethodByName('prototype.patchAttributes');

  //BidHistory.disableRemoteMethodByName('find');
  BidHistory.disableRemoteMethodByName('findById');
  BidHistory.disableRemoteMethodByName('replaceById');
  BidHistory.disableRemoteMethodByName('exists');

  BidHistory.observe('before save', function updateTimestamp(ctx, next) {
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

  BidHistory.beforeRemote('create', function(ctx, instance, next) {
    if (!ctx.req.accessToken) {
      let err = new Error('Authentication is required');
      err.statusCode = 401;
      next(err);
      return;
    }
    ctx.args.data['lenderId'] = ctx.req.accessToken.userId;
    next();
  })
};

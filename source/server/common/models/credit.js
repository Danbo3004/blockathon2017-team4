'use strict';
const globals = require('../../server/boot/globals');
const async = require('async');
const _ = require('underscore');

module.exports = function(Credit) {
  //Credit.disableRemoteMethodByName('create');
  Credit.disableRemoteMethodByName('count');
  Credit.disableRemoteMethodByName('destroyById');
  Credit.disableRemoteMethodByName('destroyAll');
  Credit.disableRemoteMethodByName('findOne');
  Credit.disableRemoteMethodByName('updateAll');
  Credit.disableRemoteMethodByName('upsert');
  Credit.disableRemoteMethodByName('upsertWithWhere');
  Credit.disableRemoteMethodByName('replaceById');
  Credit.disableRemoteMethodByName('replaceOrCreate');
  Credit.disableRemoteMethodByName('findOrCreate');
  Credit.disableRemoteMethodByName('updateAttribute');
  Credit.disableRemoteMethodByName('updateAttributes');
  Credit.disableRemoteMethodByName('destroy');
  Credit.disableRemoteMethodByName('replaceAttributes');
  Credit.disableRemoteMethodByName('createChangeStream');
  Credit.disableRemoteMethodByName('prototype.patchAttributes');

  //Credit.disableRemoteMethodByName('find');
  Credit.disableRemoteMethodByName('findById');
  Credit.disableRemoteMethodByName('replaceById');
  Credit.disableRemoteMethodByName('exists');

  Credit.observe('before save', function updateTimestamp(ctx, next) {
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

  Credit.beforeRemote('create', function(ctx, instance, next) {
    if (!ctx.req.accessToken) {
      let err = new Error('Authentication is required');
      err.statusCode = 401;
      next(err);
      return;
    }
    ctx.args.data['borrowerId'] = ctx.req.accessToken.userId;
    next();
  })
};

'use strict';
const globals = require('../../server/boot/globals');
const async = require('async');
const _ = require('underscore');
const smartContract = require("./../SmartContractUtil");
const socketIO = require('../../server/socket');

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
    // get borrowerName
    Credit.app.models.user.findById(ctx.req.accessToken.userId, (err, user) => {
      if(err) {
        next(err);
        return;
      }
      ctx.args.data['borrowerName'] = user.username;
      next();
    });
  });

  Credit.remoteMethod('newLoan', {
    accepts: [
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'val', type: 'string', required: true},
      {arg: 'rate', type: 'string', required: true},
      {arg: 'timeStart', type: 'string', required: true},
      {arg: 'timeLimit', type: 'string', required: true}
    ],
    http: {
      verb: 'post'
    },
    returns: {
       type: 'object', root:true
    }
  });

  Credit.newLoan= function(req, val, rate, timeStart, timeLimit,cb){

    async.auto({
      getUser :function (callback) {
        Credit.app.models.user.findById(req.accessToken.userId, (err, user) => {
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
      pushNewLoan: ["getUser",function(data,callback) {

        smartContract.createLoan( data["getUser"].address, val, rate, timeStart, timeLimit,cb);
      }
      ]
    },function (err,result) {
      if(err){
        cb(err);
        return;
      }

      cb(null,{message:OK});
    });


  };


  Credit.remoteMethod('bid', {
    accepts: [
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'rate', type: 'number', required: true},
      {arg: 'to', type: 'string', required: true}
    ],
    http: {
      verb: 'post'
    },
    returns: {
      type: 'object', root:true
    }
  })
  Credit.bid= function(req,rate,to,cb){
    smartContract.bidLending( req , rate, to,function(err,dt){
      if(err){
        cb(err);
        return;
      }
      else{
        cb(null,{message:OK});
      }
    });
  };


  Credit.remoteMethod('payDebt', {
    accepts: [
      {arg: 'req', type: 'object', 'http': {source: 'req'}}
    ],
    http: {
      verb: 'post'
    },
    returns: {
      type: 'object', root:true
    }
  })
  Credit.payDebt= function(req,cb){
    smartContract.payDebt(req,function (err,data) {
      if(err){
        cb(err);
        return;
      }
      else{
        cb(null,{message:OK})
      }
    });
  };

  Credit.remoteMethod('newBid', {
    accepts: [
      {arg: 'id', type: 'number', required: true},
      {arg: 'rate', type: 'number', required: true},
      {arg: 'req', type: 'object', 'http': {source: 'req'}}
    ],
    returns: {
      arg: 'bidHistory', type: 'object'
    }
  })
  Credit.newBid = function(id, rate, req, cb) {
    if (!req.accessToken) {
      let err = new Error('Authentication is required');
      err.statusCode = 401;
      cb(err);
      return;
    }
    async.auto({
      getCredit: function(callback) {
        Credit.findById(id, (err, credit) => {
          if(err) {
            callback(err);
            return;
          }
          if(!credit) {
            let err = new Error('Credit not found');
            err.statusCode = 404;
            callback(err);
            return;
          }
          if(rate >= credit.rate) {
            let err = new Error('Rate must be less than credit rate');
            err.statusCode = 400;
            callback(err);
            return;
          }
          callback(null, credit);
        })
      },
      getUser: function(callback) {
        Credit.app.models.user.findById(req.accessToken.userId, (err, user) => {
          if(err) {
            callback(err);
            return;
          }
          if(!user) {
            let err = new Error('Invalid access token');
            err.statusCode = 404;
            callback(err);
            return;
          }
          callback(null, user);
        })
      },
      checkTokenBalance: ['getCredit', 'getUser', function(data, callback) {
        Credit.app.models.util.checkTokenBalance(data['getUser'].address, (err, balance) => {
          if(err) {
            callback(err);
            return;
          }
          if(balance.balance < data['getCredit'].amount) {
            let err = new Error('Your balance is not enough to lend');
            err.statusCode = 400;
            callback(err);
            return;
          }
          callback(null, balance.balance);
        })
      }],
      updateLender: ['checkTokenBalance', function(data, callback) {
        data['getCredit'].updateAttribute('lenderId', req.accessToken.userId, (err, updatedCredit) => {
          if(err) {
            callback(err);
            return;
          }
          // create bid history
          data['getCredit'].bidHistory.create({
            borrowerId: data['getCredit'].borrowerId,
            rate: rate,
            amount: data['getCredit'].amount,
            lenderId: data['getUser'].id
          }, callback);
        })
      }]
    }, (err, results) => {
      if(err) {
        cb(err);
        return;
      }
      // use socket to broadcast
      socketIO.broadcastMessage('newBid', results['updateLender']);
      cb(null, results['updateLender']);
    })
  }
};

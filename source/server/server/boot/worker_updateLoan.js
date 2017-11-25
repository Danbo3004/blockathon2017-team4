/**
 * Created by Linh Trinh on 11/26/2017.
 */
module.exports = function (app) {
// Credit.remoteMethod('updateLoan', {
//   accepts: [
//     {arg: 'addressUser', type: 'string', required: true}
//   ],
//   http: {
//     verb: 'post'
//   },
//   returns: {
//     arg: 'transactionHash', type: 'string'
//   }
// })
// Credit.updateLoan= function(addressUser,cb){
//   smartContract.updateLoan(addressUser,cb);
// };
//
//
//
//
  const runFunc = function () {
    app.credit.find( {
      where: {
        expiredTime: {lt: Math.floor(Date.now() / 1000)},
        status : "lending",
        paymentStatus : { neq:  'failed' }
      },
      limit: 250
    },function(err,houses){
  }

setTimeout(function () {
  runFunc();
}, 10000);
}

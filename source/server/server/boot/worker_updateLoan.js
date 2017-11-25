/**
 * Created by Linh Trinh on 11/26/2017.
 */
const smartContract = require("./../../common/SmartContractUtil");

module.exports = function (app) {

  const runFunc = function () {
    app.credit.find({
      where: {
        expiredTime: {lt: Math.floor(Date.now() / 1000)},
        status: "lending",
        paymentStatus: {neq: 'failed'}
      },
      limit: 250
    }, function (err, loans) {
      if (err) {
        console.error(err);

        setTimeout(function () {
          runFunc();
        }, 20000);

        return;
      }

      if (loans == null || _.isEmpty(loans)) {
        setTimeout(function () {
          runFunc();
        }, 10000);
        return;
      }

      async.eachSeries(loans,
        function (loan, cb) {

          app.models.user.findById(loan.borrowerId, (err, user) => {
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
            smartContract.updateLoan(user.address, cb);
          });

        }
        ,
        function (err, result) {
          if (err) {
            console.error(err);

          }

          runFunc();

        });

    })


    setTimeout(function () {
      runFunc();
    }, 10000);
  }
}

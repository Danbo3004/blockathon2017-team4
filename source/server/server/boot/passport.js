'use strict';

module.exports = function (app) {
  app.use(function (req, res, next) {
    if (process.env.DEBUG == "passport") {
      console.log("");
      console.log(req.method, req.url);
      console.log("req.accessToken", req.accessToken);
      console.log("req.body", req.body);
    }
  });
};

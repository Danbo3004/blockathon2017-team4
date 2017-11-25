/**
 * Created by Linh Trinh on 11/25/2017.
 */
const app = require('../server/server');
const async = require('async');

module.exports =  {
   tokenAddress : "0xEe6d9E8529209E803eF9D08a75C181df64FF85AA",
   tokenABI :  [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "VNDt" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "10000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "tu", "type": "uint256" }, { "name": "mau", "type": "uint256" }, { "name": "pickTo", "type": "address" } ], "name": "transferBidLending", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferPayDebt", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "10000000" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "VNDt" }, { "name": "tokenSymbol", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" } ],
   tokenName : "VNDT",
   lendingAddress : "0xea2e12C1748619Ba061B7Cf7bA38a7FBe9e0A02a",
   lendingABI :   [ { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_tu", "type": "uint256" }, { "name": "_mau", "type": "uint256" }, { "name": "_blockNumberExpires", "type": "uint256" }, { "name": "_blockNumberTime", "type": "uint256" } ], "name": "createLoan", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "borrower", "type": "address" } ], "name": "calInvoice", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "so1", "type": "uint256" }, { "name": "so2", "type": "uint256" }, { "name": "so3", "type": "uint256" }, { "name": "so4", "type": "uint256" } ], "name": "compareFraction", "outputs": [ { "name": "", "type": "int256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "blockLended", "type": "uint256" }, { "name": "blockPayDebt", "type": "uint256" } ], "name": "countDays", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenIn", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" } ], "name": "safeWithdrawal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_tu", "type": "uint256" }, { "name": "_mau", "type": "uint256" }, { "name": "_to", "type": "address" } ], "name": "bidLending", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenAddress", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferPayDebt", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" } ], "name": "updateLoan", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_from", "type": "address" } ], "name": "viewLoan", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "bool", "value": false }, { "name": "", "type": "bool", "value": false }, { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "so1", "type": "uint256" }, { "name": "so2", "type": "uint256" }, { "name": "so3", "type": "uint256" }, { "name": "so4", "type": "uint256" } ], "name": "subFraction", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "token", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "token", "template": "elements_input_address", "value": "" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "tu", "type": "uint256" }, { "indexed": false, "name": "mau", "type": "uint256" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "blockNumber", "type": "uint256" } ], "name": "BidLending", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "blockNumber", "type": "uint256" } ], "name": "PayDebt", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "tu", "type": "uint256" }, { "indexed": false, "name": "mau", "type": "uint256" }, { "indexed": false, "name": "blockNumber", "type": "uint256" }, { "indexed": false, "name": "blockNumbeExpiredr", "type": "uint256" }, { "indexed": false, "name": "blockNumberTime", "type": "uint256" } ], "name": "NewLoan", "type": "event" } ],
   lendingName : "LendingContract",

   // privateKey : "0x47761074d1c2f55ee67a0f2b3267394f0fe0825508db85b8dd7544538b5c25a9",
  privateKey:"0x1568457d932ec8b292bda2ecc4e87c6480066910c6448ad6f31879209bd4e7c2",

  // const contractToken = new globals['eth-node'].eth.Contract(tokenABI, tokenAddress);
  // const contractLending = new globals['eth-node'].eth.Contract(lendingABI, lendingAddress);



//function createLoan(address _from,uint _value,uint _tu, uint _mau,uint _blockNumberExpires,uint _blockNumberTime)
   createLoan : function( addressUser, value, rate, timeStart, timeLimit,cb){
     const seconds = new Date().getTime() / 1000;
     if(timeStart < seconds){
       var err = new Error();
       err.status = 400;
       err.statusCode = 400;
       err.message = "Time start is invalid";
cb(err);
return;
     }
     const lendingAddress = this.lendingAddress;
     const privateKey = this.privateKey;
     const lendingName = this.lendingName;
    async.auto({
      getBlockNumber :  function (callback) {
        app.models.util.getCurrentBlockNumber(callback);
      },
      send: ["getBlockNumber",function(data,callback) {
        const blockNumber = data["getBlockNumber"];

        const blockStart = Math.floor((timeStart - seconds) / 15) + blockNumber;
        const blockTime = Math.floor(timeLimit / 15);
        app.models.util.sendMethodByPrivateKey(privateKey, lendingAddress, lendingName, "createLoan", [addressUser, value, rate * 1000, 1000, blockStart, blockTime], callback);
      }
        ]
    },function (err,result) {
        if(err){
          cb(err);
          return;
        }

        cb(null,true);
    });

  },

   bidLending : function( req , rate, _to,cb){
     const lendingAddress = this.lendingAddress;
     const lendingName = this.lendingName;
     const tokenAddress = this.tokenAddress;
     const tokenName = this.tokenName;
    async.auto({
      getUser :function (callback) {
        app.models.user.findById(req.accessToken.userId, (err, user) => {
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
      getLoan:function(callback){
        app.models.util.callMethod(lendingAddress,lendingName,"viewLoan",[_to],callback);
      },
      getNumberOfToken : ["getUser",function (data,callback) {
        app.models.util.checkTokenBalance(data["getUser"].address,callback);
      }],
      getBlockNumber :  function (callback) {
        app.models.util.getCurrentBlockNumber(callback);
      },
      send: ["getLoan","getNumberOfToken","getBlockNumber",function(data,callback) {
        /*
        *  uint value;
         uint tu;
         uint mau;
         uint blockNumberExpired;
         uint blockNumberTime;
         bool isPaid;
         bool isLended;
         address lender;
         uint blockNumberLended;
        * */

        if(data["getBlockNumber"] >data["getLoan"][3]){
          var error = new Error();
          error.message = "Expired";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        if(data["getLoan"][5] == true){
          var error = new Error();
          error.message = "Lended";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        if(parseInt(data["getLoan"][1])/parseInt(data["getLoan"][2]) < rate){
          var error = new Error();
          error.message = "Upper";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        if(parseInt(data["getLoan"][1])/parseInt(data["getLoan"][2]) == rate && data["getLoan"][7].length == 42){
          var error = new Error();
          error.message = "Upper";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        if(parseInt(data["getLoan"][0]) > data["getNumberOfToken"]){
          var error = new Error();
          error.message = "Not enough";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        app.models.util.sendMethod( tokenAddress,tokenName,"transferBidLending",[lendingAddress,parseInt(data["getLoan"][0]),rate*1000,1000,_to],req,callback);
      }
      ]
    },function (err,result) {
      if(err){
        cb(err);
        return;
      }

      cb(null,true);
    });
  },

   updateLoan : function(addressUser,cb){
     app.models.util.sendMethodByPrivateKey(this.privateKey, this.lendingAddress, this.lendingName, "updateLoan", [addressUser], cb);
  },

   payDebt : function( req,cb){
     const lendingAddress=  this.lendingAddress;
     const lendingName = this.lendingName;
     const tokenAddress = this.tokenAddress;
     const tokenName = this.tokenName;

    async.auto({
      getUser :function (callback) {
        app.models.user.findById(req.accessToken.userId, (err, user) => {
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
      checkInvoice:["getUser",function(data,callback){
        app.models.util.callMethod(lendingAddress,lendingName,"calInvoice",[data["getUser"].address],callback);
      }],
      getNumberOfToken : ["getUser",function (data,callback) {
        app.models.util.checkTokenBalance(data["getUser"].address,callback);
      }],
      send: ["checkInvoice","getNumberOfToken",function(data,callback) {

        if(parseInt(data["checkInvoice"]) > parseInt(data["getNumberOfToken"])){
          var error = new Error();
          error.message = "Not enough";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        app.models.util.sendMethod( tokenAddress,tokenName,"transferPayDebt",[lendingAddress,data["checkInvoice"]],req,callback);
      }
      ]
    },function (err,result) {
      if(err){
        cb(err);
        return;
      }

      cb(null,true);
    });

  },

  //function safeWithdrawal(address _to){
   withdrawal : function( addressLender,cb){
     app.models.util.sendMethodByPrivateKey(this.privateKey, this.lendingAddress, this.lendingName, "safeWithdrawal", [addressLender], cb);
  }


}

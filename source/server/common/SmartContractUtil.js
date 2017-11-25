/**
 * Created by Linh Trinh on 11/25/2017.
 */
const utils = require('models/util');
const app = require('../server/server');
const async = require('async');

module.exports = function() {
  const tokenAddress = "0xc21f6A19088aF36AB9164fEd727A7A39abDd2451";
  const tokenABI =   [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "VNDT" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1e+27" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "18" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "tu", "type": "uint256" }, { "name": "mau", "type": "uint256" }, { "name": "pickTo", "type": "address" } ], "name": "transferBidLending", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferPayDebt", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "1000000000" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "VNDT" }, { "name": "tokenSymbol", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" } ];
  const tokenName = "VNDT";
  const lendingAddress = "0x3dE98326530F5093B8a755Bf561d965Ef09C371D";
  const lendingABI =   [ { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_tu", "type": "uint256" }, { "name": "_mau", "type": "uint256" }, { "name": "_blockNumberExpires", "type": "uint256" }, { "name": "_blockNumberTime", "type": "uint256" } ], "name": "createLoan", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "so1", "type": "uint256" }, { "name": "so2", "type": "uint256" }, { "name": "so3", "type": "uint256" }, { "name": "so4", "type": "uint256" } ], "name": "compareFraction", "outputs": [ { "name": "", "type": "int256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "blockLended", "type": "uint256" }, { "name": "blockPayDebt", "type": "uint256" } ], "name": "countDays", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenIn", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" } ], "name": "safeWithdrawal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_tu", "type": "uint256" }, { "name": "_mau", "type": "uint256" }, { "name": "_to", "type": "address" } ], "name": "bidLending", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenAddress", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferPayDebt", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" } ], "name": "updateLoan", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_from", "type": "address" } ], "name": "viewLoan", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "bool", "value": false }, { "name": "", "type": "bool", "value": false }, { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "so1", "type": "uint256" }, { "name": "so2", "type": "uint256" }, { "name": "so3", "type": "uint256" }, { "name": "so4", "type": "uint256" } ], "name": "subFraction", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "token", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "token", "template": "elements_input_address", "value": "0xc21f6A19088aF36AB9164fEd727A7A39abDd2451" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "tu", "type": "uint256" }, { "indexed": false, "name": "mau", "type": "uint256" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "blockNumber", "type": "uint256" } ], "name": "BidLending", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "blockNumber", "type": "uint256" } ], "name": "PayDebt", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "tu", "type": "uint256" }, { "indexed": false, "name": "mau", "type": "uint256" }, { "indexed": false, "name": "blockNumber", "type": "uint256" }, { "indexed": false, "name": "blockNumbeExpiredr", "type": "uint256" }, { "indexed": false, "name": "blockNumberTime", "type": "uint256" } ], "name": "NewLoan", "type": "event" } ];
  const lendingName = "LendingContract";

  const privateKey = "0x47761074d1c2f55ee67a0f2b3267394f0fe0825508db85b8dd7544538b5c25a9";


  // const contractToken = new globals['eth-node'].eth.Contract(tokenABI, tokenAddress);
  // const contractLending = new globals['eth-node'].eth.Contract(lendingABI, lendingAddress);



//function createLoan(address _from,uint _value,uint _tu, uint _mau,uint _blockNumberExpires,uint _blockNumberTime)
  function createLoan( addressUser, value, rate, timeStart, timeLimit,cb){

    async.auto({
      getBlockNumber :  function (callback) {
        utils.getCurrentBlockNumber(callback);
      },
      send: ["getBlockNumber",function(data,callback) {
        const blockNumber = data["getBlockNumber"];
        const seconds = new Date().getTime() / 1000;
        const blockStart = (timeStart - seconds) / 15 + blockNumber;
        const blockTime = timeLimit / 15;
        util.sendMethodByPrivateKey(privateKey, lendingAddress, lendingName, "createLoan", [addressUser, value, rate * 1000, 1000, blockStart, blockTime], callback);
      }
        ]
    },function (err,result) {
        if(err){
          cb(err);
          return;
        }

        cb(null,true);
    });

  }

  function bidLending( _from,  _value , _tu,  _mau, _to,cb){}

  function updateLoan(addressUser,cb){
    utils.sendMethodByPrivateKey(privateKey, lendingAddress, lendingName, "updateLoan", [addressUser], cb);
  }


  function payDebt( req){
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
        utils.callMethod(lendingAddress,lendingName,"calInvoice",[data["getUser"].address],callback);
      }],
      getNumberOfToken : ["getUser",function (data,callback) {
        utils.checkTokenBalance(data["getUser"].address,callback);
      }],
      send: ["checkInvoice","getNumberOfToken",function(data,callback) {
        if(data["checkInvoice"] > data["getNumberOfToken"]){
          var error = new Error();
          error.message = "Not enough";
          error.statusCode = 400;
          error.status = 400;
          callback(error);
          return;
        }

        utils.sendMethod( tokenAddress,tokenName,"transferPayDebt",[lendingAddress,data["checkInvoice"]],req,callback);
      }
      ]
    },function (err,result) {
      if(err){
        cb(err);
        return;
      }

      cb(null,true);
    });

  }

  //function safeWithdrawal(address _to){
  function withdrawal( addressLender,cb){
    utils.sendMethodByPrivateKey(privateKey, lendingAddress, lendingName, "safeWithdrawal", [addressLender], cb);
  }


}

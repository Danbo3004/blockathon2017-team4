let socket = {};
var app = require('./server');
let io = {};

module.exports = {
  init: (server) => {
    io = require('socket.io')(server);
    io.on('connection', function (client) {
      console.log('new connection');
    });
  },
  emitClient: (address, data) => {
    if (socket.emit) {
      socket.emit(address, data);
    }
  },
  broadcastMessage: (channel, message) => {
    io.emit(channel, message);
  }
}

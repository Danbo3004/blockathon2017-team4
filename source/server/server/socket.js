let socket = {};
var app = require('./server');

module.exports = {
  init: (server) => {
    const io = require('socket.io')(server);
    io.on('connection', function (client) {
    });
  },
  emitClient: (address, data) => {
    if (socket.emit) {
      socket.emit(address, data);
    }
  }
}

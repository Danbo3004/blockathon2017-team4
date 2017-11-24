const path = require('path');
const normalizedPath = path.join(__dirname, '../smart-contracts');

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  // if(file.slice(-5) === '.json') {
  //   const fileName = file.substr(0, file.length - 5);
  //   module.exports[fileName] = require(path.join(normalizedPath, file));
  // }
  module.exports[file] = require(path.join(normalizedPath, file));
});

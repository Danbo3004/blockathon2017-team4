const fs = require('fs');
const path = require('path');
const normalizedPath = path.join(__dirname, '../../globals');

exportFiles(normalizedPath, module.exports);

function exportFiles(normalizedPath, exportObj) {
    fs.readdirSync(normalizedPath).forEach(function(file) {
        let fileName;
        if(file.indexOf('.') === -1) {
            //folder
            exportObj[file] = {};
            exportFiles(path.join(normalizedPath, file), exportObj[file]);
        } else {
            fileName = file.slice(0, file.indexOf('.'));
            exportObj[fileName] = require(normalizedPath + '/' + fileName);
        }
    });
}

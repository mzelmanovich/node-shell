let fs = require('fs');

module.exports = function(cb) {
    fs.readdir('.', function(err, files) {
        let fileStr = '';
        files.forEach(function(file) {
            fileStr += file.toString() + "\n";
        });
        cb(err, fileStr.trim());
    });
}
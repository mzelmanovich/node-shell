let fs = require('fs');
module.exports = function(cb, paraArr) {


    fs.readFile(paraArr[0], paraArr[1] || 'utf8', function(error, data){
        var data = data.split('\n').sort().join('\n');
        cb(error, data);
    });
}
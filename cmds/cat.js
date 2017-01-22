let fs = require('fs');
module.exports = function(cb, paraArr) {
    fs.readFile(paraArr[0], paraArr[1] || 'utf8', cb);
}



let fs = require('fs');
module.exports = function(cb, paraArr) {
    //cb(null, paraArr.join(' '));
    fs.readFile(paraArr[0], paraArr[1] || 'utf8', cb);
}



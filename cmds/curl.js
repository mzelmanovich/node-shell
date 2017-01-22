let request = require('request');
module.exports = function(cb, paramArr) {
    request(paramArr[0], function(error, response, body) {
        cb(error, body);
    });
};
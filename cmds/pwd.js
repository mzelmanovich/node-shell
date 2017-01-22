module.exports = function(cb) {
    let dir = __dirname;
    dir = dir.toString().replace('/cmds', '');
    cb(null, dir);
}
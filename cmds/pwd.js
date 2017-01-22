module.exports = function() {
    let dir = __dirname;
    dir = dir.toString().replace('/cmds', '');
    return dir;
}
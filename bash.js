var cmds = require('./cmds');
process.stdout.write('prompt > ');

let cbOutFnc = function(err, result) {
    if (err) {
        process.stdout.write(err);
    } else {
        process.stdout.write(result);
    }
    process.stdout.write('\nprompt > ');
};
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim(); // remove the newline

    if (cmds[cmd]) {
        cmds[cmd](cbOutFnc);
    } else {
        cbOutFnc(null, 'You typed: ' + cmd);
    }
});
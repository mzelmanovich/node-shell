var cmds = require('./cmds');
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim(); // remove the newline
    let outPutStr;

    switch (cmd) {
        case 'date':
            outPutStr = cmds.date();
            break;
        case 'pwd':
            outPutStr = cmds.pwd();
            break;
        default:
            outPutStr = 'You typed: ' + cmd;
    }
    process.stdout.write(outPutStr);
    process.stdout.write('\nprompt > ');
});
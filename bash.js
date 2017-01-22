var cmds = require('./cmds');
process.stdout.write('prompt > ');

let cbOutFnc = function(err, result) {
    if (err) {
        process.stdout.write(err.toString());
    } else {
        process.stdout.write(result);
    }
    process.stdout.write('\nprompt > ');
};

let envVars = {
        $PATH: () => __dirname
    }
    // The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var input = data.toString().trim(); // remove the newline
    var params = input.split(' ');
    var cmd = params.shift();
    params = params.map((param) => envVars[param] ? envVars[param]() : param);
    if (cmds[cmd]) {
        cmds[cmd](cbOutFnc, params);
    } else {
        cbOutFnc(null, 'You typed: ' + input);
    }
});
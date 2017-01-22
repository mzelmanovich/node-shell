var cmds = require('./cmds');
process.stdout.write('prompt > ');
var nextCmd;
let cbOutFnc = function(err, result) {
    if (err) {
        process.stdout.write(err.toString());
    } else {
        if (nextCmd){
            inputData(nextCmd, result);
            return null;
        }
        process.stdout.write(result);
    }
    process.stdout.write('\nprompt > ');
};

let envVars = {
        $PATH: () => __dirname
    }
    // The stdin 'data' event fires after a user types in a line
    let inputData = function(data, processedData) {
    var input = data.toString().trim(); // remove the newline
    nextCmd = input.split('|');

    var params = nextCmd.shift().split(' ');
    nextCmd = nextCmd.join('|');
    var cmd = params.shift();
    params = params.map((param) => envVars[param] ? envVars[param]() : param);
    params = processedData ? [processedData].concat(params) : params;
    if (cmds[cmd]) {
        cmds[cmd](cbOutFnc,params);
    } else {
        cbOutFnc(null, 'You typed: ' + input);
    }
}
process.stdin.on('data', inputData);


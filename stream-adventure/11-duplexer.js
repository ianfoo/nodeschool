const spawn = require('child_process').spawn;
const duplexer2 = require('duplexer2');

module.exports = function (cmd, args) {
    let subcmd = spawn(cmd, args);
    return duplexer2(subcmd.stdin, subcmd.stdout);
};



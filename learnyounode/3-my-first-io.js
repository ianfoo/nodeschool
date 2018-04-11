var fs = require('fs');

function countLines(file) {
    var lines = fs.readFileSync(file).toString().split('\n');
    var len = lines.length;
    var lastLine = lines[lines.length-1];
    if (lastLine[lastLine.length-1] !== '\n') len--;
    return len;
}

console.log(countLines(process.argv[2]));

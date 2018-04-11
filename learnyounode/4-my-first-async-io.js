var fs = require('fs');

function countLines(file) {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log('error reading file', file);
            return;
        }
        var lines = data.split('\n');
        var len = lines.length;
        var lastLine = lines[lines.length-1];
        if (lastLine[lastLine.length-1] !== '\n') len--;
        console.log(len);
    });
}

countLines(process.argv[2]);

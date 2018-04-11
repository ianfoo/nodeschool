var fs = require('fs');

function ls(dir, ext) {
    fs.readdir(dir, function(err, data) {
        if (err) {
            console.log('error reading directory ' + dir + ': ', err);
            return;
        }
        for (var entry of data) {
            if (entry.endsWith('.' + ext)) {
                console.log(entry);
            }
        }
    });
}

if (process.argv.length < 4) {
    console.error(process.argv[1] + ': directory and extension are required');
    return 1;
}

var dir = process.argv[2];
var ext = process.argv[3];
ls(dir, ext);
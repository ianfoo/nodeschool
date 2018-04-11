var filtLs = require('./6-make-it-modular-module');

if (process.argv.length < 3) {
    console.error(process.argv[1] + ': directory and exension are required');
    return 1;
}

var dir = process.argv[2];
var ext = process.argv[3];

filtLs(dir, ext, (err, entries) => {
    if (err) {
        return console.error(err);
    }
    entries.forEach(element => {
        console.log(element);
    });
});
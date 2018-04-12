const transform = require('through2');

var stream = transform(uppercase);

function uppercase(chunk, enc, next) {
    this.push(chunk.toString().toUpperCase());
    next();
}

process.stdin.pipe(stream).pipe(process.stdout);

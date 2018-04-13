const split = require('split2');
const through = require('through2');

const transform = [String.prototype.toLowerCase, String.prototype.toUpperCase];
let alternator = 0;

function transform(chunk, _, next) {
    this.push(transform[alternator].apply(chunk.toString()) + '\n');
    alternator = (alternator+1) % 2;
    next();
}

process.stdin
    .pipe(split())
    .pipe(through(transform))
    .pipe(process.stdout);


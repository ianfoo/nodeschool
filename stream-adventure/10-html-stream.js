// This one definitely requires looking at some examples for the trumpet npm module.
// Which is fair, but most of the other lessons can be completed without this.
// At this point I'm beginning to remember that "Node programming" is less
// programming and more using 47 flavor-of-the-week modules, and remembering
// what I found distasteful about it.

const through2 = require('through2');
const trumpet = require('trumpet');
let tr = trumpet();

let loudStream = tr.select('.loud').createStream();
loudStream.pipe(through2(function(chunk, _, next) {
    this.push(chunk.toString().toUpperCase());
    next();
})).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);
// I started this one out thinking I knew what to do, but resisted
// falling too far into the sunk cost fallacy and reviewed the reference
// solution to determine what to do without having to learn all the details
// about the tar module. I figured 'concat-stream' might be involved.
// Initially I was thinking about just piping everything into a single 
// pipeline, not setting up a new stream for each entry and just writing
// it to the console, but it makes enough sense, having seen it.
//
// Note that the reference solution unnecessarily creates a gunzip stream,
// which the tar module handles natively. This may have been added after the
// workshop was authored, though.

const concat = require('concat-stream');
const crypto = require('crypto');
const tar = require('tar');
const through2 = require('through2');

const cipher = process.argv[2];
const passphrase = process.argv[3];

let decipher = crypto.createDecipher(cipher, passphrase);
let parse = new tar.Parse();
parse.on('entry', function(e) {
    if (e.type !== 'File') return e.resume();
    let h = crypto.createHash('md5', {encoding: 'hex'});
    e.pipe(h).pipe(concat(function(result) {
        console.log(result + ' ' + e.path);
    }));
});

process.stdin
    .pipe(decipher)
    .pipe(parse);

// I'm baffled by how obtuse some of the previous challenges seemed
// when I encounter this one and am able to complete it in 30 seconds.
// Nearly all the code was provided in the challenge description, even.

const crypto = require('crypto');

let stream = crypto.createDecipher('aes256', process.argv[2]);
process.stdin.pipe(stream).pipe(process.stdout);
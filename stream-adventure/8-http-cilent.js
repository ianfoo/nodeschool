const request = require('request');
const addr = 'localhost:8099';

let req = request.post(addr);
process.stdin.pipe(req).pipe(process.stdout);
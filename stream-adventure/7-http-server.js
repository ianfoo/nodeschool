const http = require('http');
const through2 = require('through2');
const port = parseInt(process.argv[2]);

if (!port) {
    console.error('a port number is required');
    return 1;
}

let server = http.createServer((req, res) => {
    if (req.method != 'POST') {
        res.writeHead(400);
        res.end('only POST requests are supported');
        return;
    }
    res.writeHead(200, {'content-type':'text/plain'});
    req.pipe(through2(function(chunk, _, next) {
        this.push(chunk.toString().toUpperCase());
        next();
    }))
    .pipe(res);
});
server.listen(process.argv[2]);
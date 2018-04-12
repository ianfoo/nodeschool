const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

var server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.writeHead(400);
        res.end('Only POST requests are supported');
        return;
    }
    res.writeHead(200, {'content-type':'text-plain'});
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(port);

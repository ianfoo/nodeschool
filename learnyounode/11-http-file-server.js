const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(file).pipe(res);
});
server.listen(port);


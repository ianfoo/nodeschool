const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);

var server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(400);
        res.end('Only GET requests are supported');
        return;
    }
    const parsed = url.parse(req.url, true);
    var handler;

    // Ensure valid API path.
    switch (parsed.pathname) {
        case '/api/parsetime':
            handler = parseTime;
            break;
        case '/api/unixtime':
            handler = unixTime;
            break;
        default:
            res.writeHead(404);
            return;
    }

    // Ensure required parameter is present and is valid value.
    if (!parsed.query.iso) {
        res.writeHead(400);
        res.end('iso parameter is required');
        return;
    }
    const date = new Date(parsed.query.iso);
    if (typeof date !== 'object' || isNaN(date.getTime())) {
        res.writeHead(400);
        res.end('invalid date', parsed.query.iso);
        return;
    }
    res.writeHead(200, {'content-type':'application/json'});
    res.end(JSON.stringify(handler(date)));
});

function parseTime(date) { 
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function unixTime(date) {
    return {
        unixtime: date.getTime()
    };
}

server.listen(port);
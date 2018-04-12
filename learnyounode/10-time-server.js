const net = require('net');
const defaultPort = 3000;
var port = defaultPort;

if (process.argv.length > 2) {
    port = Number(process.argv[2]);
}

function pad(num) {
    if (num > 10) return '' + num;
    else return '0' + num;
}

// Return date in YYYY-MM-DD HH:MM format.
function formatDate(date) {
    var s = date.getFullYear() + '-';
    s += pad(date.getMonth() + 1) + '-';
    s += pad(date.getDate()) + ' ';
    s += pad(date.getHours()) + ':';
    s += pad(date.getMinutes());
    return s;
}

var socket = net.createServer((socket) => {
    socket.end(formatDate(new Date) + '\n');
});
socket.listen(port);
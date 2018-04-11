var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (response) => {
    var buf = new bl();
    response.setEncoding('utf8');
    response.pipe(buf((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        var out = buf.toString()
        console.log(out.length);
        console.log(out);
    }))
});
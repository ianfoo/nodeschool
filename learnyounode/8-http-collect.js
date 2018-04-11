var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        var out = data.toString()
        console.log(out.length);
        console.log(out);
    }))
});
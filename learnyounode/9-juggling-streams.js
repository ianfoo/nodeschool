const http = require('http');
const bl = require('bl');

// Read the response body from a URL request.
function collectURL(url, callback) {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if (err) return callback(err);
            return callback(null, data.toString());
        }));
    });
}

function displayURLsContent(urls, content) {
    urls.forEach((url) => console.log(content[url]));
}

const numURLs = 3;

if (process.argv.length < numURLs + 2) {
    console.error(numURLs, 'URLs are required');
    return 1;
}

var outstandingURLs = numURLs;
var urls = process.argv.slice(2);
var urlContent = {};

urls.forEach((url) => collectURL(url, (err, data) => {
    urlContent[url] = err ? err : data;
    outstandingURLs--;
    if (outstandingURLs === 0) displayURLsContent(urls, urlContent);
}));
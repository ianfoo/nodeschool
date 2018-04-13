// Hooray! After some frustration with the previous challenges, I was able to
// make sense of this one. My solution is not quite as elegant as the reference
// solution, which has O(1) space complexity while processing thie input since
// it does not build an array, which is smart. But I'm leaving my first solution
// here, which builds up the lines in an array.

const combine = require('stream-combiner');
const through2 = require('through2');
const split = require('split');
const zlib = require('zlib');

module.exports = function () {
    let genres = [];
    let genre = '';
    const input = function(line, _, next) {
        if (line.length === 0) return next();
        let obj = JSON.parse(line);
        if (obj.type == 'genre') {
            genres.push({name: obj.name, books: []});
        } else if (obj.type == 'book') {
            genres[genres.length-1].books.push(obj.name);
        }
        next();
    }
    const end = function(done) {
        for (line of genres) {
            console.log(JSON.stringify(line));
            this.push(JSON.stringify(line) + '\n');
        }
        done();
    }
    return combine(
        split(),
        through2(input, end),
        zlib.createGzip()
    );
};
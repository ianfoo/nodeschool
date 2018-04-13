// The instructions seem to get more obtuse as we go further into this workshop.
// We are instructed to return a duplex stream from a function, with the stream
// that is passed in as the readable side of the duplex stream, but are given no
// guidance on what the writable side should be.
//
// I had to look at the solution to figure out just what the heck was expected.
// This is when it became clear that these lessons were written by someone with
// so much stream and helper-module experience that it's second nature to them
// (understandably), but that this knowledge is not effectively conveyed in a
// form that someone unfamiliar with all the idiosyncracies of writing Node
// streams code can easily grasp. Or at least not me.

const duplexer2 = require('duplexer2');
const through2 = require('through2');

module.exports = function(counter) {
    let countryCounts = {};
    const count = function(obj, _, next) {
        let country = obj.country;
        if (!country) return next();
        countryCounts[country] = (countryCounts[country] || 0) + 1;
        next();
    };
    const end = function(done) {
        counter.setCounts(countryCounts);
        done();
    }
    let input = through2.obj(count, end);

    // objectMode option is not  documented in duplexer2 documentation;
    // it refers to Stream.Duplex in the Node standard library, whose
    // documentation is not user-friendly.
    return duplexer2({objectMode: true}, input, counter);
};
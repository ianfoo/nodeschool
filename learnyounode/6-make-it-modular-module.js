var fs = require('fs');

module.exports = function ls(dir, ext, callback) {
    var files = fs.readdir(dir, function(err, data) {
        if (err) {
            return callback(err);
        }
        var filtered = data.filter((entry) => {
            return entry.endsWith('.' + ext);
        })
        return callback(null, filtered);
    });
};

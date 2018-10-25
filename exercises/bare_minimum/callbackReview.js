/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      var bk = data.indexOf('\n');
      var firstLine = data.slice(0, bk);
      callback(null,  firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // (url, (err) => )
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


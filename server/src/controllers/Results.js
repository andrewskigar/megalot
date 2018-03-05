const fs = require('fs');
const config = require('../config');

module.exports = {
  async results(req, res) {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
      if (err) throw err;

      let results = JSON.parse(data);
      let sortedResults = [];

      results.forEach((tirag) => {
        let numbers = tirag.slice(0, 6);
        numbers.sort(function (a, b) {
          return a - b;
        });

        numbers.push(tirag[6]);
        sortedResults.push(numbers);
      });

      res.send(sortedResults);
    });
  },
}

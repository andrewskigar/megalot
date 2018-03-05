const fs = require('fs');
const config = require('../config');

module.exports = {
  async results(req, res) {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
      if (err) throw err;

      const factor = parseInt(req.query.factor, 10);
      const results = JSON.parse(data);

      let sortedResults = [];
      let patternResults = [];

      results.forEach((tirag) => {
        let numbers = tirag.slice(0, 6);
        numbers.sort(function (a, b) {
          return a - b;
        });

        numbers.push(tirag[6]);
        sortedResults.push(numbers);
      });

      for (let i = 0, l = 28; i < l; i++) {
        let pattern = sortedResults[i].map((number, index) => {
          let isSame;
          let nextTirag = sortedResults[i + factor] ? sortedResults[i + factor].slice(0, 6) : [];

          // mega ball
          if (index === 6) {
            isSame = sortedResults[i + factor] && sortedResults[i + factor][6] === number;
          } else {
            isSame = nextTirag.length && nextTirag.indexOf(number) !== -1;
          }

          return {
            number: number,
            isSame: isSame
          };
        });

        patternResults.push(pattern);
      };

      res.send(patternResults);
    });
  },
}

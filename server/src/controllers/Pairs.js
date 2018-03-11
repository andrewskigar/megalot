const fs = require('fs')
const _ = require('underscore')
const config = require('../config')

const MAX_COUNT = 27
const MIN_COUNT = 15

module.exports = {
  async results(req, res) {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
      if (err) throw err

      const factor = req.params.type || 'min'
      const results = JSON.parse(data)
      const pairs = []

      for (let i = 1; i <= 42; i += 1) {
        for (let j = i + 1; j <= 42; j += 1) {
          let pairCount = 0
          const p1 = (`0${i}`).slice(-2)
          const p2 = (`0${j}`).slice(-2)
          for (let k = 0; k < results.length; k += 1) {
            if (_.intersection(results[k].slice(0, 6), [p1, p2]).length === 2) {
              pairCount += 1
            }
          }

          if ((factor === 'max' && pairCount > MAX_COUNT) || (factor === 'min' && pairCount < MIN_COUNT)) {
            pairs.push({
              pair: `${p1}-${p2}`,
              count: pairCount,
            })
          }
        }
      }

      res.send(pairs)
    })
  },
}

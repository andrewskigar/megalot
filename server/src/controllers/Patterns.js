const fs = require('fs')
const config = require('../config')

module.exports = {
  async results(req, res) {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
      if (err) throw err

      const factor = parseInt(req.query.factor, 10)
      const results = JSON.parse(data)

      const sortedResults = []
      const patternResults = []

      results.forEach((tirag) => {
        const numbers = tirag.slice(0, 6)
        numbers.sort((a, b) => a - b)

        numbers.push(tirag[6])
        sortedResults.push(numbers)
      })

      for (let i = 0, l = 28; i < l; i += 1) {
        const pattern = sortedResults[i].map((number, index) => {
          let isSame
          const nextTirag = sortedResults[i + factor] ? sortedResults[i + factor].slice(0, 6) : []

          // mega ball
          if (index === 6) {
            isSame = sortedResults[i + factor] && sortedResults[i + factor][6] === number
          } else {
            isSame = nextTirag.length && nextTirag.indexOf(number) !== -1
          }

          return {
            number,
            isSame,
          }
        })

        patternResults.push(pattern)
      }

      res.send(patternResults)
    })
  },
}

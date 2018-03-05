const fs = require('fs')
const config = require('../config')

module.exports = {
  async results(req, res) {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
      if (err) throw err

      const results = JSON.parse(data)
      const sortedResults = []

      results.forEach((tirag) => {
        const numbers = tirag.slice(0, 6)
        numbers.sort((a, b) => a - b)

        numbers.push(tirag[6])
        sortedResults.push(numbers)
      })

      res.send(sortedResults)
    })
  },
}

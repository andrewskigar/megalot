const fs = require('fs')
const config = require('../config')

module.exports = {
  async results(req, res) {
    fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
      if (err) throw err

      const results = JSON.parse(data)
      const longAgo = Array(42).fill(0)

      results.forEach((tirag, tiragNumber) => {
        for (let i = 0, l = tirag.length - 1; i < l; i += 1) {
          const number = parseInt(tirag[i], 10) - 1

          if (longAgo[number] === 0) {
            longAgo[number] = tiragNumber + 1
          }
        }
      })

      res.send(longAgo)
    })
  },
}

/* eslint-disable no-console, no-await-in-loop */
const scrapper = require('osmosis')
const fs = require('fs')
const _ = require('underscore')
const config = require('./config.js')

let megalotResults = []
const args = process.argv.slice(2)

function scrapeMegalotPageResults(url, onlyLast = true) {
  return new Promise((resolve, reject) => {
    const results = []
    console.log(url)
    scrapper.get(url)
      .find(`div.span10${onlyLast ? ':first' : ''}`)
      .set({
        data: 'div',
      })
      .data((item) => {
        const reNumbers = /(\d+),(\d+),(\d+),(\d+),(\d+),(\d+)/
        const reMega = /: (\d+)/

        const resultNumbers = item.data.match(reNumbers)
        const resultMega = item.data.match(reMega)

        const tirag = [
          resultNumbers[1],
          resultNumbers[2],
          resultNumbers[3],
          resultNumbers[4],
          resultNumbers[5],
          resultNumbers[6],
          resultMega[1],
        ]

        results.push(tirag)
      })
      .done(() => resolve(results))
      .error(() => reject())
  })
}

if (args.length === 1 && args[0] === '--all') {
  (async function scrapeMegalotAllResults() {
    const addResults = (results) => {
      megalotResults = megalotResults.concat(results)
    }
    for (let i = 1; i <= 122; i += 1) {
      const url = `${config.MEGALOT_URL}/page/${i}`
      await scrapeMegalotPageResults(url, false).then(addResults)
    }

    fs.writeFile(config.MEGALOT_RESULTS, JSON.stringify(megalotResults), (err) => {
      if (err) throw err
    })
  }())
} else {
  fs.readFile(config.MEGALOT_RESULTS, (err, data) => {
    if (err) throw err

    megalotResults = JSON.parse(data);

    (async () => {
      await scrapeMegalotPageResults(config.MEGALOT_URL).then((results) => {
        if (!_.isEqual(results[0], megalotResults[0])) {
          megalotResults = results.concat(megalotResults)
        }
      })

      fs.writeFile(config.MEGALOT_RESULTS, JSON.stringify(megalotResults), (error) => {
        if (error) throw error
      })
    })()
  })
}

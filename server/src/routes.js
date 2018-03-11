const LongAgoController = require('./controllers/LongAgo')
const PairsController = require('./controllers/Pairs')
const PatternsController = require('./controllers/Patterns')
const ResultsController = require('./controllers/Results')

module.exports = (app) => {
  app.get(
    '/longago',
    LongAgoController.results,
  )
  app.get(
    '/pairs/:type',
    PairsController.results,
  )
  app.get(
    '/patterns',
    PatternsController.results,
  )
  app.get(
    '/history',
    ResultsController.results,
  )
}

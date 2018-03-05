const LongAgoController = require('./controllers/LongAgo')
const PatternsController = require('./controllers/Patterns')
const ResultsController = require('./controllers/Results')

module.exports = (app) => {
  app.get(
    '/longago',
    LongAgoController.results,
  )
  app.get(
    '/patterns',
    PatternsController.results,
  )
  app.get(
    '/results',
    ResultsController.results,
  )
}

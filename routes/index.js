const journeyTrackerRoutes = require('./journey-tracker');

const init = (app) => {
    app.use('/api/journey-tracking', journeyTrackerRoutes)
}

module.exports = {
    init
}

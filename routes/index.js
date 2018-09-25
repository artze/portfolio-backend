const journeyTrackerRoutes = require('./journey-tracker');

const init = (app) => {
    app.use('/api/journey-tracker', journeyTrackerRoutes)
}

module.exports = {
    init
}

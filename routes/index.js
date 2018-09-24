const journeyTrackingRoutes = require('./journey-tracking');

const init = (app) => {
    app.use('/api/journey-tracking', journeyTrackingRoutes)
}

module.exports = {
    init
}

const journeyTrackerRoutes = require('./journey-tracker');
const websocketAppRoutes = require('./websocket-app');

const init = (app) => {
    app.use('/api/journey-tracker', journeyTrackerRoutes);

    app.use('/api/websocket-app', websocketAppRoutes);
}

module.exports = {
    init
}

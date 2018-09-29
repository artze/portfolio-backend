const journeyTrackerRoutes = require('./journey-tracker');
const chatAppRoutes = require('./chat-app');

const init = (app) => {
    app.use('/api/journey-tracker', journeyTrackerRoutes);

    app.use('/api/chat-app', chatAppRoutes);
}

module.exports = {
    init
}

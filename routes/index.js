const journeyTrackerRoutes = require('./journey-tracker');
const chatAppRoutes = require('./chat-app');

// REMOVE BELOW THIS LINE
const path = require('path');
// REMOVE ABOVE THIS LINE

const init = (app) => {
    app.use('/api/journey-tracker', journeyTrackerRoutes);

    app.use('/api/chat-app', chatAppRoutes);

    // REMOVE BELOW THIS LINE
    app.get('/api/cam-test', function(req, res) {
        res.sendFile(path.join(path.dirname(require.main.filename || process.mainModule.filename) + '/public/index.html'));
    })
    // REMOVE ABOVE THIS LINE
}

module.exports = {
    init
}

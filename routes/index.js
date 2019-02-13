const journeyTrackerRoutes = require('./journey-tracker');
const chatAppRoutes = require('./chat-app');
const pdfMailRoutes = require('./pdfMailRoutes');
const errorHandler = require('../middleware/errorHandler');

const init = (app) => {
    app.use('/api/journey-tracker', journeyTrackerRoutes);

    app.use('/api/chat-app', chatAppRoutes);

    app.use('/api/pdf-mails', pdfMailRoutes);

    app.use(errorHandler);
}

module.exports = {
    init
}

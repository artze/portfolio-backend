const journeyTrackerData = require('../../app-data/journey-tracker');

const getTrackerDevices = (req, res) => {
    res.status(200).json(Object.keys(journeyTrackerData));
}

module.exports = {
    getTrackerDevices
}
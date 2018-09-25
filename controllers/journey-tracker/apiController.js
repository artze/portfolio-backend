const journeyTrackerData = require('../../app-data/journey-tracker');

const getTrackingDevices = (req, res) => {
    res.status(200).json(Object.keys(journeyTrackerData));
}

module.exports = {
    getTrackingDevices
}
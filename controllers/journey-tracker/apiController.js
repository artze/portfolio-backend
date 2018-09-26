const journeyTrackerData = require('../../app-data/journey-tracker');

const getTrackerDevices = (req, res) => {
    res.status(200).json(Object.keys(journeyTrackerData));
}

const getJourneyListResults = (req, res) => {
    let trackingDeviceObj = journeyTrackerData[req.body.device];
    let startDateObj = new Date(req.body.startDate);
    let endDateObj = new Date(req.body.endDate);
    let journeyListResult = [];
    for(let date in trackingDeviceObj) {
        let dateObj = new Date(date);
        if(startDateObj.getTime() <= dateObj.getTime() && endDateObj.getTime() >= dateObj.getTime()) {
            journeyListResult.push({[date]: trackingDeviceObj[date]})
        }
    }
    res.status(200).json(journeyListResult)
}

module.exports = {
    getTrackerDevices,
    getJourneyListResults
}

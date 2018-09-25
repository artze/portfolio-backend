const router = require('express').Router();
const journeyTrackerController = require('../controllers/journey-tracker/apiController')

router.get('/journey-trackers', journeyTrackerController.getTrackingDevices);

module.exports = router;
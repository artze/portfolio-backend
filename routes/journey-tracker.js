const router = require('express').Router();
const journeyTrackerController = require('../controllers/journey-tracker/apiController')

router.get('/tracker-devices', journeyTrackerController.getTrackerDevices);

module.exports = router;
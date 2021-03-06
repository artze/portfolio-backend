const router = require('express').Router();
const journeyTrackerController = require('../controllers/journey-tracker/apiController')

router.get('/tracker-devices', journeyTrackerController.getTrackerDevices);

router.post('/query', journeyTrackerController.getJourneyListResults)

module.exports = router;
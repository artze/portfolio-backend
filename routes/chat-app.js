const router = require('express').Router();
const chatAppController = require('../controllers/chat-app/apiController')

router.ws('/', chatAppController.relayMessage)

module.exports = router;

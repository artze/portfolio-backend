const router = require('express').Router();
const pdfMailController = require('../controllers/pdf-mail/apiController');

router.post('/', pdfMailController.handlePdfMail);

module.exports = router;

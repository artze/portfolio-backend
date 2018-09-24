const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).end('Journey-tracker test')
});

module.exports = router;
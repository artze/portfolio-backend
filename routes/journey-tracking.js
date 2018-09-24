const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).end('Journey-tracking test')
});

module.exports = router;
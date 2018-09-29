const router = require('express').Router();

router.ws('/', (ws, req) => {
    console.log('websocket opened');
    ws.on('message', (msg) => {
        console.log(msg)
    })
})

module.exports = router;

const expressWsInstance = require('../../websocket');

const relayMessage = (ws, req) => {
    ws.on('message', (msg) => {
        console.log(expressWsInstance.getWss().clients)
        ws.send(msg)
    })
}

module.exports = {
    relayMessage
}

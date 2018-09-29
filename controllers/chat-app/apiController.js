const relayMessage = (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg)
    })
}

module.exports = {
    relayMessage
}

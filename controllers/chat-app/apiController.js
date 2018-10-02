const expressWsInstance = require('../../websocket');
const uuidv4 = require('uuid/v4');

const relayMessage = (ws, req) => {
    if(!ws.id) {
        ws.id = uuidv4();
    }
    let pingInterval = setInterval(() => {
        ws.ping('heartbeat');
    }, 30000)

    ws.on('message', (msg) => {
        expressWsInstance.getWss().clients.forEach((client) => {
            if(client.id === ws.id) {
                return;
            }
            client.send(msg);
        })
    })

    ws.on('close', () => {
        clearInterval(pingInterval);
        pingInterval = null;
    })
}

module.exports = {
    relayMessage
}

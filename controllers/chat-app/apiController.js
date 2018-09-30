const expressWsInstance = require('../../websocket');
const uuidv4 = require('uuid/v4');

const relayMessage = (ws, req) => {

    // Register client id
    expressWsInstance.getWss().on('connection', (ws) => {
        ws.id = uuidv4();
        console.log('connected')
    })

    ws.on('message', (msg) => {
        expressWsInstance.getWss().clients.forEach((client) => {
            if(client.id === ws.id) {
                return;
            }
            client.send(msg);
        })
    })
}

module.exports = {
    relayMessage
}

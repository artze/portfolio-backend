const expressWs = require('express-ws');
const app = require('../app');

const expressWsInstance = expressWs(app)

module.exports = expressWsInstance;
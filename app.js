require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = module.exports = express();
const expressWsInstance = require('./websocket');
const routes = require('./routes');

const port = process.env.PORT || 3000
const corsOptions = {
	origin: 'http://localhost:8080'
}

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
routes.init(app);

//REMOVE THIS LINE
console.log(process.env.EMAIL_ADD)

app.listen(port, () => {
	console.log(`Express running on ${port}`);
})

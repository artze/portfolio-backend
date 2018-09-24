const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors({
	origin: 'http://localhost:8080',
	credentials: true,
	allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
routes.init(app);

app.listen(port, () => {
	console.log(`Express running on ${port}`);
})

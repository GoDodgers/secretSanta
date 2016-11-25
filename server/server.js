const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');

const app = express();

app.set('PORT', process.env.PORT || 2222);

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.end('hello world'); 
});

app.listen(app.get('PORT'), () => {
	console.log(`[${moment().format('hh:mm:ss')}]Express Server listening on port`, app.get('PORT'));
});

module.exports = app;

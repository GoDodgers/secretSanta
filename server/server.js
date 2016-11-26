const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');

const db = require('./db.js');

const app = express();

app.set('PORT', process.env.PORT || 2222);

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.end('Hello, Santa!'); 
});

app.get('/santa', (req, res) => {
    db.Santa.findAll({limit: 10, order: 'updated_at DESC'}).then((santas) => {
        res.json(santas);
    });
});

app.post('/santa', (req, res) => {
    db.Santa.findOrCreate({where: {name: req.body.name}}).spread((santa, isCreated) => {
        if (isCreated) {
            res.json(santa);
        } else {
            res.status(409);
            res.send('Santa already exists');
        }
    });
});

app.listen(app.get('PORT'), () => {
	console.log(`[${moment().format('hh:mm:ss')}]Express Server listening on port`, app.get('PORT'));
});

module.exports = app;

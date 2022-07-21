'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
    console.log('req.url: ', req.url);
    next();
})

app.use((err, req, res, next) => {
    console.log('err: ', err);
    next();
})

app.get('/value', (req, res, next) => {
    res.send('value');
});

app.get('/crash', (req, res, next) => {

    process.exit()
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})





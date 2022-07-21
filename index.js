'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
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
    const value = req.query.value;
    console.log(`returning value: ${value}`);
    res.send({value});
});

app.get('/crash', (req, res, next) => {
    console.log('crushing the server');
    process.exit()
})
app.get('/of', (req, res, next) => {
    const {a} = process.env.NOT_EXISTS;
    res.send({a});
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})





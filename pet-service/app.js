var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var petRouter = require('./routes/pets');
var breedRouter = require('./routes/breeds');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/pets', petRouter);
app.use('/breeds', breedRouter);

module.exports = app;

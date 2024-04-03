var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const apidocsRouter = require('./routes/apidocs'); //importando a rota do apidocs

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', apidocsRouter); 

module.exports = app;

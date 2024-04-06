var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var apidocsRouter = require('./routes/apidocs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', apidocsRouter);
//app.use('/users', usersRouter);

module.exports = app;

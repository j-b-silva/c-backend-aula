var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const produtosRouter = require('./routes/produtos'); //importando meus arquivos

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', produtosRouter); //deixar a rota pronta

module.exports = app;

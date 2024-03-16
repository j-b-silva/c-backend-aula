const express = require('express');

const app = express();

const routerProdutos = require('./router');

app.use(routerProdutos); //fazendo uso

app.listen(3000, function(){
    console.log("API ONLINE!!!");
});


module.exports = app;

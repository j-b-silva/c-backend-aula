const express = require('express');

const app = express();

const routerProdutos = require('./router');

app.use(routerProdutos);

app.listen(3000, function(){
    console.log('API ESTÁ ON');
})

module.exports = app;

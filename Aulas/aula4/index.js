//Importando o framework:
const express = require('express');

// Executando o framework
const app = express();

//Middleware embutido/integrado no express:
app.use(express.json()); 
//tira do json e joga nas variaveis


//Middleware de aplicação:
app.use(function(req,res, next){
    console.log("Data", new Date());
    next()
});


//Middleware de rota: 
app.get("/", function(req,res){
    console.log("URL = ", req.url);
    console.log("Metodos = ", req.method);
    console.log("Cabeçalho = ", req.headers);
    console.log("Parametros = ", req.params);
    console.log("Corpo = ", req.body);
    res.status(201).send("Olá");
});

app.post("/", function(req,res){
    console.log(req.body);
    res.json({status: "200", message: "Sucesso"});
});

app.put("/", function(req,res){
    res.status(201).end();
});

app.delete("/", function(req,res){
    //res.end(); //impressão
    throw new Exception(); //test erro
});


//Middleware de erro:
app.use(function(error,req,res,next){
    res.status(400).send("Deu ruim!");
})

app.listen(3000, function(){
    console.log('API está ON!');
})

//Middleware de terceiros: pacotes instalados

//Observação: sempre utilizar o next() para chamar o próximo middleware

module.exports = app;
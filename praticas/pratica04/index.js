const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log("Ohayo!!! 200 OK")
});

module.exports = app; 

app.get("/", function(req,res){
    res.status(200).send("Você fez uma requisição GET");
})

app.post("/", function(req,res){
    res.status(201).send("Você fez uma requisição POST");
    res.json({status:"200", message:"Sucesso"}); 
})

app.put("/", function(req,res){
    res.status(200).send("Você fez uma requisição PUT");
})

app.delete("/", function(req,res){
    res.status(204).end();
})


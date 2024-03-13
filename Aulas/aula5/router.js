const express = require('express');

const router = express.Router();

router.get("/produtos", function(req,res){
    res.json([]);  //resposta devolver um json
});

//router.get("/produtos/1", function(req,res){
    //res.json({});  //resposta devolver um json
//});

router.get("/produtos/:produtoId", function(req,res){
    if(req.params.produtoID == 1000000){
        res.status(404).json({msg: "Produto não encontrado"});
        return;
    } 
        res.json({});

});

//router.get("/produtos/1000000", function(req,res){
    //res.status({}).send("Está página não existe");
//})





module.exports = router;

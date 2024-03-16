const express = require('express');

const router = express();

const produtos = [];

router.get("/produtos/:protudoId", function(req,res){
    const encontrado = produtos.find(item => item.id == req.params.produtoId);
    if(!encontrado){
        res.status(404).json({msg: "Produto não encontrado"})
    }
})








module.exports = router;
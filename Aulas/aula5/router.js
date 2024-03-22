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


// cola do professor:

router.get("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId != 1) {
      res.status(404).json({msg: "Produto não encontrado"});
      return;
    }
  
    res.json({});
  });
  
  router.post("/produtos", function(req, res){
    if (!req.body || !req.body.nome || !req.body.preco) {
      res.status(422).json({msg: "Nome e/ou preco do produto obrigatorios"});
      return;
    }
    const novo = {
        id: produtos.length +1,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novo) //jogando os novos produtos para o array

    res.status(201).json({});
  });
  
  router.put("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId != 1) {
      res.status(404).json({msg: "Produto não encontrado"});
      return;
    }
  
    res.json({});
  });
  
  router.delete("/produtos/:produtoId", function(req, res){
    //if (req.params.produtoId != 1) {
        const posicao = produtos.findIndex(item => item.id == req.params.produtoId)

        if (posicao<0){
            res.status(404).json({msg: "Produto não encontrado"});
            return;
        }
      
        produtos.splice(posicao,1);

        res.status(204).end();
      
    res.status(204).end();
  //}
    });



module.exports = router;

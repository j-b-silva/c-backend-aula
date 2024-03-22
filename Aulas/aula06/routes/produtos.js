const express = require('express');

const produtosController = require("../controllers/controller_produto"); //usou ../ porque teve que subir o nivel

const router = express.Router();

//metodo
//rota é só barra, já foi determinado em app que a rota seria /produtos, nesse caso: /produtos/

router.get("/", produtosController.listarTodos); //é so um parametro, nao usar () de função

router.get("/:produtoId", produtosController.buscarPeloId, produtosController.exibir);

router.post("/", produtosController.criar);

router.put("/:produtoId", produtosController.buscarPeloId, produtosController.atualizar);

router.delete("/:produtoId",produtosController.buscarPeloId, produtosController.remover); 

module.exports = router;
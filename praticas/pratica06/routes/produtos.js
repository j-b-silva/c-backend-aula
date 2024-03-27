const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');

const router = express.Router();

router.get('/produtos', controllerProdutos.listarTodos);

router.get('/produtos/1', controllerProdutos.buscarPeloId);

router.post('/produtos', controllerProdutos.criar);

router.put('/produtos/1', controllerProdutos.atualizar);

router.delete('/produtos/1', controllerProdutos.remover);

module.exports = router; 


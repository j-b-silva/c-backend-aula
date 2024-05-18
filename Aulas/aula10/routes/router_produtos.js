const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');

const router = express.Router();

router.post('/', controllerProdutos.validarDados, controllerProdutos.criar);

router.get('/', controllerProdutos.obterTodos);

router.get('/:id', controllerProdutos.buscarPeloId, controllerProdutos.obter);

router.put('/:id', controllerProdutos.buscarPeloId, controllerProdutos.validarDados, controllerProdutos.atualizar);

router.delete('/:id', (req, res) => res.status(204).end());

module.exports = router;

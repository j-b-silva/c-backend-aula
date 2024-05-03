const mongoose = require('mongoose'); 

// criar esquema(estrutura) pra salvar o documento no banco de dados

const produtoSchema = new mongoose.Schema({
    nome: String, 
    preco: Number,
    quantidade: Number
});

module.exports = mongoose.model('Produto', produtoSchema); //nome sempre no singular
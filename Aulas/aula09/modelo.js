const mongoose = require('mongoose'); 

// criar esquema(estrutura) pra salvar o documento no banco de dados

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String, 
        trim: true, 
        uppercase: true, 
        required: [true, "Nome é obrigatorio"], 
        minLength:[3, "Nome deve conter no minimo 3 letras"]}, 
    //função trim vai aplicar no nome e tira os espaços em brancos no final
    // required = obrigatorio 
    preco: {type: Number, min: 0},
    quantidade: {type: Number, default:0}
});

module.exports = mongoose.model('Produto', produtoSchema); //nome sempre no singular
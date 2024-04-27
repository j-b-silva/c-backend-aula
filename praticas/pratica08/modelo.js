const conectarDb = require('./database');

class Contato {
    constructor(nome,email,telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = null
    }
}

async function inserir(contato){
    const db = await conectarDb();
    const collection = db.collection('contatos');
    const result = collection.insertOne({nome: contato.nome, email: contato.email, telefone: contato.telefone});
    contato.id = result.insertedId;
}

async function alterar(contato){
    const db = await conectarDb();
    const collection = db.collection('contatos');
    collection.updateOne({_id: contato.id},{$set: {nome:contato.nome, email:contato.email, telefone: contato.telefone}})
}

async function deletar(contato){
    const db = await conectarDb();
    const collection = db.collection('contatos');
    collection.deleteOne({nome: contato.nome});
}

async function buscar(contato){
    const db = await conectarDb();
    const collection = db.collection('contato');
    const result = collection.findOne({nome: contato.nome});
    contato.nome = result.nome;
    contato.email = result.email;
    contato.telefone = result.telefone;
}

module.exports = {Contato, inserir, alterar, deletar, buscar};

const readline = require('readline-sync');

const Contato = require('./modulo3');

const contatos = [];

function adicionarContato(nome,email,telefone){
    const novocontato = new Contato;
    const nome = nome;
    const contato = contato;
    const email = email;
    contatos.push(novocontato);
}

function listarContatos(){
    return contatos;
}

function buscarContato(nome){
    const nome = readline.question("Digite o nome que deseja buscar:  ");
    const buscar = contatos.find( contato => contato.nome == nome);
    if (buscar){
        console.log(buscar.toString())
    } else {
        console.log("Contato não localizado!");
    }
}

function atualizarContato(nome,email,telefone){
    buscarContato(nome)
}

module.exports = {adicionarContato, listarContatos, buscarContato, atualizarContato};
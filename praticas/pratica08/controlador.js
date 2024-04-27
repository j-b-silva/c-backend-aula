const Contato = require('./modelo');
const inserir = require('./modelo');
const alterar = require('./modelo');
const deletar = require('./modelo');
const buscar = require('./modelo');

function adicionarContato(nome, email,telefoe){
    const contato = new Contato("Julis", "julis@julis", 99142);
    inserir(contato);
}

function buscarContato(nome){
    const contato = new Contato("julis");
    return buscar(); 
}

function atualizarContato(nome, email, telefone){
    const contato = buscarContato(nome);
    if(contato = contato){
        contato.nome = "Lulu";
        contato.email = "lulu@lulu";
        contato.telefone = 92573;
    } else{
        console.log("Contato não encontrado!");
    }
    alterar(contato);
}

function removerContato(nome){
    const contato = removerContato(nome);
    if(contato = contato){
        deletar(contato)
    }
}

module.exports = {adicionarContato, buscarContato, atualizarContato, removerContato}

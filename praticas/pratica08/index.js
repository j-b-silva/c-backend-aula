const readline = require('readline-sync');
const controlador = require('./controlador');

function menu(){
    console.log("1. Adicionar contato");
    console.log("2. Buscar contato");
    console.log("3. Atualizar contato");
    console.log("4. Remover contato");
    console.log("5. Sair");
}

function escolherOpcao(opcao){
    const opcao = menu();
}
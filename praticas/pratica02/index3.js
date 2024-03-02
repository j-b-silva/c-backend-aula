const readline = require('readline-sync');
const contatoControlador = require('./controlador3');

function menu(){
    console.log("Adicionar contato: ");
    console.log("Listar contato: ");
    console.log("Buscar contato: ");
    console.log("Atualizar contato: ");
    console.log("Remover contato: ");
    console.log("Sair: ");
}

function escolherOpcao(opcao){
    switch(opcao){
        case '1': 
        const nome = readline.question("Digite um nome:  ");
        const telefone = readline.question("Digite um telefone: ");
        const email = readline.question("Digite um email:  ");
        break;
        case '2': 
        break;
        case '3': 
        break;
        case '4': 
        break;
        case '5': 
        break;
        case '6': 
        break;

    }
}

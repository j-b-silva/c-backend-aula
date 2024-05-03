const readline = require('readline-sync');

const controlador = require('./controlador');

function exibirMenu(){
    console.log('AGENDA');
    console.log('1 - Consultar Contato');
    console.log('2 - Incluir Contato');
    console.log('3 - Atualizar Contato');
    console.log('4 - Remover Contato');
    console.log('5 - Sair');
};

async function escolherOpcao(opcao){
    switch(opcao){
        case "1":{ 
            const nome = readline.question("Entre com o nome do contato: ");
            const contato = await controlador.consultarContato(nome);
            console.log("Contrato encontrado: ", contato);
            break; 
        }
        case "2":{ 
            const nome = readline.question("Entre com o nome do contato: ");
            const email = readline.question("Entre com o email do contato: ");
            const telefone = readline.question("Entre com o telefone do contato: ");
            const contato = await controlador.criarContato(nome,email,telefone);
            console.log("Contato ", contato, " adicionado.");
            break; 
        }
        case "3":{ 
            const nome = readline.question("Entre com o nome do contato: ");
            const email = readline.question("Entre com o email do contato: ");
            const telefone = readline.question("Entre com o telefone do contato: ");
            const contato = await controlador.atualizarContato(nome,email,telefone);
            console.log("Contato ", contato, " atualizado.");
            break; 
        }
        case "4":{ 
            const nome = readline.question("Entre com o nome do contato: ");
            const contato = await controlador.removerContato(nome);
            console.log("Contato ", contato, " foi removido.")
            break; 
        }
        case "5": process.exit(0);
        default: console.log("Opção invalida. Tente novamente!");
    }
}

async function main(){
    while(true){
        exibirMenu();
        const opcao = readline.question("Escolha uma opcao: ");
        await escolherOpcao(opcao);
    }
}

main();
const modelo = require('./modelo');

async function criarContato(nome,email,telefone){
    const contato = new modelo.Contato(nome,email,telefone);
    const { id }= await modelo.inserir(contato);
    contato.id = id;
    return {...contato}; //criou uma cópia/clone do objeto e devolve (bom para otimização)
}

async function atualizarContato(nome,email,telefone){
    const contato = await consultarContato(nome);
    if (contato){
        contato.email = email;
        contato.telefone = telefone;
        await modelo.alterar(contato);
    }
    return { ...contato }
}

async function consultarContato(nome){
    const contato = new modelo.Contato(nome);
    const { id, email, telefone } = await modelo.consultar(contato);
    contato.id = id;
    contato.email = email;
    contato.telefone = telefone;
    return {...contato};
}

async function removerContato(nome){
    const contato = await consultarContato(nome);
    if(contato){
        await modelo.deletar(contato);
    }
    return {...contato}
}

module.exports = {
    criarContato, 
    atualizarContato, 
    consultarContato, 
    removerContato
};
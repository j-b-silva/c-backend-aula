//Modelo cria regras dentro das classes

class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    toString() {
        return `${this.nome}-${this.preco}`; //tudo vira string com crase
    }
}

//const produto = new Produto("caju", 2);

module.exports = Produto;
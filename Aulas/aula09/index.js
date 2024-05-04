require('dotenv').config(); //carregando todas as constantes/variaveis do env na memoria
const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL; //joga tudo que o config salva na memoria na url 

async function main(){
    try{
        await mongoose.connect(url);
        console.log("De boas");
    } catch(erro){
        console.log("Deu ruim!", erro.message);
    }


    //inserir um produto
    const produto = new Produto({
        nome: "  uv        ",
        preco: -2,
    });
    try{
        await produto.save();
        console.log(produto);
    } catch (err){
        for(let key in err.errors){
            console.log(err.errors[key].message);
        }
        //err.error.forEach(erro => console.log(erro.message));
    }
    

    /*const produto = await Produto.create({
        nome: "uva",
        preco: 32.5,
        quantidade: 10
    });
    console.log(produto);*/

    //inserir N produtos
    /*const produtos = await Produto.insertMany([
        {nome: "maca", preco: 20.7, quantidade: 8},
        {nome: "pera", preco: 12.5, quantidade: 18},
        {nome: "laranja", preco: 25.6, quantidade: 28},
    ]);
    console.log(produtos);*/

    //consultar 1 produto
    //const produto = await Produto.findOne({nome: "ameixa"});
    //console.log(produto);

    //consultar N produtos
    //const produto = await Produto.find({nome: "banana"});
    // console.log(produto );

    //atualizar 1 produto
    // const produto = await Produto.findOneAndUpdate(
    //     {nome: "banana"}, {nome: "banana nanica", preco: 15.0, quantidade: 20}
    // );
    // console.log(produto);
    // const result = await Produto.updateOne(
    //     {nome:"banana"}, 
    //     {nome: "banana nanica", preco: 15.0, quantidade: 20}
    //     );
    //     console.log(result);

    //remover 1 produto
    // const produto = await Produto.findOneAndDelete({nome: "uva"});
    // console.log(produto);

    //remover varios = deleteMany


    await mongoose.disconnect(); //desconecta se a aplicação cair
};

main();
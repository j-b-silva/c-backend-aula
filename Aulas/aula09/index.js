require('dotenv').config(); //carregando todas as constantes/variaveis do env na memoria

const mongoose = require('mongoose');

const url = process.env.MONGODB_URL; //joga tudo que o config salva na memoria na url 

async function main(){
    try{
        await mongoose.connect();
        console.log("De boas");
    } catch(erro){
        console.log("Deu ruim!", erro.message);
    }
    await mongoose.disconnect(); //desconecta se a aplicação cair
};

main();
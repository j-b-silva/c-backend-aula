const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://renegada_142:cailley142@cluster0.odjsvyz.mongodb.net/';
var client = new MongoClient(url);

async function conectarDb(){
    try{
        await client.connect();
        return client.db('agenda');
    } catch(error){
        console.log("Deu ruim!", error);
    }
}



module.exports = conectarDb;
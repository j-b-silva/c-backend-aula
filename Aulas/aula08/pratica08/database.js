const { MongoClient } = require('mongodb');

let db = null;

const url ='mongodb+srv://renegada_142:cailley142@cluster0.odjsvyz.mongodb.net/'

async function conectarDb(){
    if(db){
        return db;
    }
    const client = new MongoClient(url);
    await client.connect(); //espera conectar
    db = client.db('agenda');
    return db;
}

module.exports = conectarDb;
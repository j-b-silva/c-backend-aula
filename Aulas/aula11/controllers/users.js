const Usuario = require('../models/users');

async function criar(req,res){
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json({id: novoUsuario._id.toString(), email: novoUsuario.email});
};

async function entrar(req,res){
    const usuarioEncontrado = await Usuario.findOne({email: req.body.email});
    if(usuarioEncontrado){
        if(usuarioEncontrado.senha === req.body.senha){
            res.json({token: "1234567890"});
        } else{
            res.status(401).json({msg: "Acesso negado!"});
        }
    } else {
        res.status(400).json({msg: "Credenciais invalidas!"});
    }
}

module.exports = {criar, entrar};
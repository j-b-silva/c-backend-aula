//checar se tem token e se é válido

function validarToken(req,res,next){
    if (req.headers.token){
            if(req.headers.token === '1234567890'){
                next();
            } else{
                res.status(401).json({msg: "Acesso negado"})
            }
    } else{
        res.status(401).json({msg: "Acesso negado"})
    }
}

module.exports = validarToken;
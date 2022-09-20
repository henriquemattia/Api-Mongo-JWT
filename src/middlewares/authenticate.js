import jwt from 'jsonwebtoken'

export default (req, res, next) =>{
    console.log("middleware");
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({
            error: true,
            message: "Token nao fornecido"
        })
    }


    const parts = authHeader.split(" ")

    if(parts.length !== 2){
        return res.status(401).json({
            error: true,
            message: "Tipo de token inválido!"
        })
    }

    const [sheme, token] = parts

    if(sheme.indexOf("Bearer") !== 0){
        return res.status(401).json({
            error: true,
            message: "Token mal formatado"
        })
    }

    jwt.verify(token, process.env.API_SECRET, (err, decoded)=>{
        console.log(err);
        console.log(decoded);

        if(err){
            return res.status(401).json({
                error: true,
                message: "Token inválido/expirado"
            })
        }
        return next()
    })
}
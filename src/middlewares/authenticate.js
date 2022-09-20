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

    console.log(authHeader);

    next()
}
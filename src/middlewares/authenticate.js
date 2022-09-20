export default (req, res, next) =>{
    console.log("middleware");
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({
            error: true,
            message: "Token nao fornecido"
        })
    }

    console.log(authHeader);

    next()
}
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://henriquemattia:paoseco8@cluster0.w5jru7g.mongodb.net/?retryWrites=true&w=majority", {}, (error)=>{
    if (error){
        console.log("falha ao conectar com o banco de dados");
        console.log(error);
        return
    }
    console.log("Conecção efetuada com sucesso");
});

// mongoose.Promise = global.Promise;

let database = mongoose.connection;

export default database;
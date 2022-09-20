import mongoose from 'mongoose'
import dotenv from "dotenv-safe"
dotenv.config()


const mongoDB = 

mongoose.connect(process.env.MONGO_URI, {}, (error)=>{
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
import express from "express";
import database from "./database/index.js";

import AuthController from './controllers/AuthController.js';
import AdminController from './controllers/AdminController.js';
import authenticate from "./middlewares/authenticate.js";

import dotenv from "dotenv-safe"
dotenv.config()

const app = express()

app.use(express.json())

// database.on("open", () => console.log("Conexão com o MongoDB feita com sucesso!"));
// database.on("error", () => console.log("Conexão com o MongoDB quebrada! Houve um erro: "));

app.use("/auth", AuthController)
app.use("/admin", authenticate ,AdminController)


app.listen(3030, ()=>{
    console.log("Server is running on port 3030");
})
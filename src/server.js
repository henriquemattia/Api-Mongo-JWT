import express from "express";
import authController from './controllers/AuthController.js';
import database from "./database/index.js";

import dotenv from "dotenv-safe"
dotenv.config()

const app = express()

app.use(express.json())

// database.on("open", () => console.log("Conexão com o MongoDB feita com sucesso!"));
// database.on("error", () => console.log("Conexão com o MongoDB quebrada! Houve um erro: "));

app.use("/auth", authController)

app.listen(3030, ()=>{
    console.log("Server is running on port 3030");
})
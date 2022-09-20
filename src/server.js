import express from "express";
import database from "./database/index.js";

import AuthController from './controllers/AuthController.js';
import AdminController from './controllers/AdminController.js';
import authenticate from "./middlewares/authenticate.js";

import dotenv from "dotenv-safe"
import cors from 'cors'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
// database.on("open", () => console.log("Conexão com o MongoDB feita com sucesso!"));
// database.on("error", () => console.log("Conexão com o MongoDB quebrada! Houve um erro: "));

app.use("/auth", AuthController)
app.use("/admin", authenticate ,AdminController)

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
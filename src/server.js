import express from "express";

const app = express()

app.get('/', (req, res)=>{

})

app.listen(3030, ()=>{
    console.log("Server is running");
})
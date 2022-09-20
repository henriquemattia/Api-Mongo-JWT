import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

const router = express.Router()

const genereteToken =(user ={}) =>{
   return jwt.sign({
        id: user.id, 
        name: user.username
    }, process.env.API_SECRET, {
            expiresIn: 86400
        }
    )
}

 

router.post("/register", async(req, res)=>{

    const { email } = req.body

    if(await User.findOne({ email })){
        return res.status(400).json({
            error: true,
            message: "Email já cadastrado"
        })
    }

    const user = await User.create(req.body)
    user.password = undefined

    return res.json({ 
        user,
        token: genereteToken(user)
    })
})

router.post("/login", async(req, res)=>{
    const {email, password} = req.body
    const user = await User.findOne({ email }).select("+password")


    if(!user){
        return res.status(400).json({
            error: true,
            message: "Usuário nao encontrado!"
        })
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({
            error: true,
            message: "Senha invalida"
        })
    }


    user.password = undefined


    return res.json({
        user,
        token: genereteToken(user)
    })
    // return res.status(200)
})

export default router 
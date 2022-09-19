import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.post("/register", async(req, res)=>{

    const { email } = req.body

    if(await User.findOne({ email })){
        return res.status(400).json({
            error: true,
            message: "Email já cadastrado"
        })
    }

    const Users = await User.create(req.body)

    return res.json({
        error: false,
        message: "Register with success!",
        data: Users
    })
})

export default router
import express from 'express'
// import UserModel from '../models/User.js'

const router = express.Router()

router.post("/register", (req, res)=>{
    console.log(req.body);
    return res.json({
        error: false,
        message: "Register with success!"
    })
})

export default router
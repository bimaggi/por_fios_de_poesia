const User = require('../models/User');


const register = async(req,res)=>{
    const user = new User(req.body)
    try{
        let savedUser = await user.save()
        res.send(savedUser)

    }catch(error){
        res.status(400).send(error)
    }
}

const login = (req,res)=>{
    res.send('Login')
}

module.exports = {register,login}
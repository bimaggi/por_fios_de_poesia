const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const showRegister = (req,res)=>{
    res.render('register',{body:{}})
}

const register = async(req,res)=>{
    const selectedUser = await User.findOne({email:req.body.email});
    if(selectedUser){
        return res.status(400).send("Email já cadastrado!")
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })
    try{
        let savedUser = await user.save()
        res.redirect('/user/login')
    }catch(error){
        res.status(400).send(error) 
    }
}

const showlogin = (req,res)=>{
    res.render('login',{body:{}})
}

const login = async(req,res)=>{
    const selectedUser = await User.findOne({email:req.body.email});
    if(!selectedUser){
        return res.status(400).send("Email ou senha incorreto!")
    }
     const passwordAndUserMatch = await bcrypt.compare(req.body.password,selectedUser.password)
    if(!passwordAndUserMatch){
        return res.status(400).send("Email ou senha incorreto!")
    }
    const token =jwt.sign({_id:selectedUser._id}, process.env.TOKEN_SECRET)
    res.header('authorization-token',token)
    res.send('Usuário Logado!')
}

const showPrivicyPolicy = (req,res)=>{
    res.render('privicyPolicy')

} 



module.exports = {register,login,showRegister,showlogin,showPrivicyPolicy}
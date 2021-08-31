const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidate,registerValidate} = require('./validate')

const showRegister = (req,res)=>{
    res.render('register',{
        body:{}
    })
};

const register = async(req,res)=>{

    const {error} = registerValidate(req.body)
    if(error){
        return res.status(400).send(error.message)
    }
   
    const selectedUser = await User.findOne({email:req.body.email});
    if(selectedUser)return res.status(400).send("Email já cadastrado!")
    
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

};

const showlogin = (req,res)=>{
    res.render('login',{
        body:{}
    })
};

const login = async(req,res)=>{
    const {error} = loginValidate(req.body)
    if(error){
        return res.status(400).send(error.message)
    }

    const selectedUser = await User.findOne({email:req.body.email});

    if(!selectedUser)return res.status(400).send("Email ou senha incorreto!");

    const token = jwt.sign({
        email:selectedUser.email,
        admin:selectedUser.admin
    }, process.env.TOKEN_SECRET);

    const passwordAndUserMatch = await bcrypt.compareSync(
        req.body.password,
        selectedUser.password);

    if(!passwordAndUserMatch) return res.status(400).send("Email ou senha incorreto!")
        res.cookie("token_protegido",token);
        res.header('authorization-token',token)
        res.send('logado')
}

module.exports = {register,login,showRegister,showlogin}
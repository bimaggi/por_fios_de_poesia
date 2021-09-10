const jwt = require('jsonwebtoken');
const sendgrid = require('../plugins/sendgrid');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const {forgotPassword:validateForgotPassword} = require('./validateResetPassword');

const forgotPassword = async(req,res)=>{

    const {error} = validateForgotPassword(req.body)
    if(error){
        return res.status(400).send(error.message)
    }
    const token = jwt.sign({
        email:req.body.email,
    }, process.env.TOKEN_SECRET);

    const email = {
        to: req.body.email,
        from:'porfiosdepoesia@gmail.com',
        templateId:'d-bf0db9b12bec48ca96a71f59a32eea6f',
        ip_pool:'transactional',
        dynamic_template_data:{
            apiKey:`${process.env.BASE_URL}/resetPassword?apiKey=${token}`,
        }
    }
    await sendgrid.send(email)
    //return res.status(200).json({})
    res.send('O link foi enviado para o seu email')
}

const showForgotPassword = (req,res)=>{
    res.render('forgotPassword')
}

const showResetPassword =(req,res)=>{
    res.render('resetPassword',{
        body:{},
    })
}

const resetPassword = async(req,res)=>{
    let user = {}
    user.password = bcrypt.hashSync(req.body.password)
    let token = req.params.token
    
    if (!token){
        token = req.body.token
    }
    let doc = await User.updateOne({token:token}, user)

    //const {email} = jwt.verify(
    //    req.body.token, 
    //    process.env.TOKEN_SECRET)
    //
  //          await User.updateOne({email},{ 
    //        password:bcrypt.hashSync(req.body.password)
    //    })
    //
    return res.redirect('/user/login')
}
module.exports = {forgotPassword,showForgotPassword,resetPassword,showResetPassword}
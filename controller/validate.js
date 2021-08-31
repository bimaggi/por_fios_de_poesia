const Joi = require('@hapi/joi'); 

const registerValidate = (data)=>{
    const schema = Joi.object({
        name:Joi.string().required().min(2).max(50),
        email:Joi.string().min(10).max(100),
        password:Joi.string().min(6).max(100),
        privicy:Joi.required()
    })
    return schema.validate(data)
}

const loginValidate = (data)=>{
    const schema = Joi.object({
        email:Joi.string().min(7).max(50),
        password:Joi.string().min(6).max(50)
    })
    return schema.validate(data)
}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;
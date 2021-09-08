const Joi = require('@hapi/joi'); 

const forgotPassword = (data)=>{
    const schema = Joi.object({
        email:Joi.string().min(10).max(100),
    })
    return schema.validate(data)
}

const resetPassword = (data)=>{
    const schema = Joi.object({
        token:Joi.string(),
        password:Joi.string().min(6).max(50)
    })
    return schema.validate(data)
}

module.exports ={forgotPassword}
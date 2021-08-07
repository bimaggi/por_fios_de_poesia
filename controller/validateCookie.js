const jwt = require('jsonwebtoken')

const validateCookie = (req,res,next)=>{
    if(req.cookies.token_protegido){
        //console.log(req.cookies.token_protegido)
        try{
            const userVerified = jwt.verify(req.cookies.token_protegido, process.env.TOKEN_SECRET)
            req.user = userVerified;
            next()
            }catch(error){
                res.redirect('/user/login')
            }
    }else{
        res.redirect('/user/login')
    }
}
module.exports = validateCookie
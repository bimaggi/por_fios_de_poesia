const jwt = require('jsonwebtoken');


 const auth = (req,res,next)=>{
    const token = req.header('authorization-token');
     
    //console.log('este é o token',token)
    if(!token) return res.status(401).send('Acesso negado')
    try{
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = userVerified;
        //console.log('este é o req.user',req.user)
        next()
    }catch(error){
        res.status(401).send('Acesso negado')
    }
} 
module.exports = auth
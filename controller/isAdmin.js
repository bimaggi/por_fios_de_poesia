const isAdmin = (req,res,next)=>{
    if(req.user.admin === true){
        next()
    }else if(req.user.admin === false) {
        res.send('Acesso negado, você não é admin !')
    }
}    

module.exports = isAdmin
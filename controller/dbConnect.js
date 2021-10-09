if(process.env.NODE_ENV == "production"){
    module.exports = {MONGO_URL:process.env.MONGO_CONNECTION_URL_PROD}
}else{
    module.exports={MONGO_URL:process.env.MONGO_CONNECTION_URL}
   
}
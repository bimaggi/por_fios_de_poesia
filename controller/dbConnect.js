if(process.env.NODE_ENV === "production"){
    module.exports = {MONGO_URL:process.env.MONGO_CONNECTION_URL_PROD}
}else{
    console.log('nodeenv',process.env.NODE_ENV)
    module.exports={MONGO_URL:process.env.MONGO_CONNECTION_URL}
   
}
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


const homePageRouter = require('./routes/homePageRouter')
const userRouter = require('./routes/userRouter')
const privicyRouter = require('./routes/privicyRouter')
const poetryRouter = require('./routes/poetryRouter');
const auth = require('./controller/authController');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on('error',()=>{console.log('Houve um erro')});
db.once('open',()=>{ console.log('conectado com sucesso')});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.use(express.static('public'));

app.use('/',homePageRouter);
app.use('/user',userRouter);
app.use('/privicyPolicy',privicyRouter);
app.use('/admin',auth,poetryRouter);


//app.listen(PORT,()=>{ console.log('rodando na porta', PORT)});
app.listen(process.env.PORT,()=>{ console.log('Server Running')});
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const homePageRouter = require('./routes/homePageRouter')
const userRouter = require('./routes/userRouter')
const privicyRouter = require('./routes/privicyRouter')
const poetryRouter = require('./routes/poetryRouter')
const termOfUseRouter = require ('./routes/termOfUseRouter')
const resetPasswordRouter = require('./routes/resetPasswordRouter')

const validateCookie = require('./controller/validateCookie')
const cookieParser = require('cookie-parser')

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
app.use(cookieParser())

app.use('/',homePageRouter);
app.use('/user',userRouter);
app.use('/privicyPolicy',privicyRouter);
app.use('/admin',validateCookie,poetryRouter);
app.use('/termOfUse',termOfUseRouter);
app.use('/resetPassword', resetPasswordRouter);
app.listen(process.env.PORT,()=>{ console.log('Server Running')});
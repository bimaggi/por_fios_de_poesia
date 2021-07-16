const express = require('express');
const app = express();

const dotenv=require('dotenv')
dotenv.config()

const path = require('path');
const poetryRouter= require('./routes/poetryRouter');
const userRouter = require('./routes/userRouter')
//const PORT = 3000;

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
app.use('/', poetryRouter);
app.use('/user', userRouter);


//app.listen(PORT,()=>{ console.log('rodando na porta', PORT)});
app.listen(process.env.PORT,()=>{ console.log('Server Running')});

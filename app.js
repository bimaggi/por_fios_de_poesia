const express = require('express');
const app = express();

const path = require('path');

const poetryRouter= require('./routes/poetryRouter');
const PORT = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry',{ useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error',()=>{console.log('Houve um erro')});
db.once('open',()=>{ console.log('conectado com sucesso')});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'))

app.use('/',poetryRouter);

app.listen(PORT,()=>{ console.log('rodando na porta', PORT)})
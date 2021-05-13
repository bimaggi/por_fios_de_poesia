const express = require('express');
const app = express();

const poetryRouter= require('./routes/poetryRouter');
const PORT = 5000;

app.use('/',poetryRouter);

app.listen(PORT,()=>{ console.log('rodando na porta', PORT)})
const Poetry = require('../models/Poetry');


const render = async(req,res)=> { 
    try{
        let poetries = await Poetry.find({})
        res.render('index', {poetry:poetries})

    }catch(error){
        res.send(error)
    }
};

const showAdd = (req,res)=>{
    res.render('addPoetry',{body:{}})
};

const addPoetry = async(req, res)=>{
    let poetry = new Poetry(req.body)
    try{
        let doc = await poetry.save()
        res.redirect('/all')

    }catch(error){
        res.send(error)
    }
};

const allPoetry = async(req,res)=>{
    try{
        let poetries = await Poetry.find({})
        res.render('allPoetry', {poetry:poetries})

    }catch(error){
        res.send(error)
    }
};

const deletePoetry= async(req,res)=>{
    let id = req.params.id;
    if (!id){
        id = req.body.id;
    }
    try{
        await Poetry.findByIdAndDelete(id)
        res.redirect('/all/')

    }catch(error){
        res.status(404).send(error)
    }
};

const loadPoetry = async(req,res)=>{
    let id = req.params.id;
    try{
        let doc = await Poetry.findById(id)
        res.render('editPoetry',{body:doc})

    }catch(error){
        res.status(404).send(error)
    }
};

const editPoetry = async(req,res)=>{
        let poetry= {}
        poetry.title = req.body.title
        poetry.text = req.body.text
        poetry.author= req.body.author
        poetry.url = req.body.url

        let id = req.params.id

        if (!id){
            id = req.body.id;
        }
       // console.log(id)
        //console.log(poetry)
    try{
        let doc = await Poetry.updateOne({_id:id}, poetry)
        res.redirect('/all')

    }catch(error){
        res.send(error)
    }
};

module.exports = {render,showAdd,addPoetry,allPoetry,deletePoetry,loadPoetry,editPoetry}
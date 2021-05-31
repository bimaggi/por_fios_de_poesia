const Poetry = require('../models/Poetry');

const showAdd = (req,res)=>{
    res.render('addPoetry',{body:{}})
};

const addPoetry = async(req, res)=>{
    let poetry = new Poetry(req.body)
    try{
        let doc = await poetry.save()
        res.redirect('/allPoetry')

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
        res.redirect('/allPoetry/')

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
        poetry.tags = req.body.tags

        let id = req.params.id

        if (!id){
            id = req.body.id;
        }
       // console.log(id)
        //console.log(poetry)
    try{
        let doc = await Poetry.updateOne({_id:id}, poetry)
        res.redirect('/allPoetry')

    }catch(error){
        res.send(error)
    }
};

const render= (req, res)=>{
     res.render('index',{ results: false })
};

const renderSearch = async(req,res)=>{
    let search = req.query.query
    console.log(search)
    try{
        let docs = await Poetry.find({tags:{ $all: search }})
        res.render('index', { results: true, search: req.query.query, list: docs })
    }catch(error){
        res.send(error)
    }
 };
     
module.exports = {showAdd,addPoetry,allPoetry,deletePoetry,loadPoetry,editPoetry,render,renderSearch}
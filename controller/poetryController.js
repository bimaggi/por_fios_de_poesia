const Poetry = require('../models/Poetry');
const isAdmin = require('./isAdmin');

const showAdd = (req,res)=>{
    res.render('addPoetry',{body:{}})
};

const addPoetry = async(req, res)=>{
    //let poetry = new Poetry(req.body)
    let poetry = new Poetry({
        title : req.body.title,
        text: req.body.text,
        author: req.body.author,
        tags:req.body.tags.split(';'),
        url: req.body.url,
        post_by: req.user.email  
    })
    try{
        let doc = await poetry.save()
            res.redirect('/admin/allPoetry')
    }catch(error){
       res.send(error)
    }
};  

const allPoetry = async(req,res)=>{
    try{
        if(req.user.admin == true){
            let poetries = await Poetry.find({})
            res.render('allPoetry',{poetry:poetries})
        }else{
            let poetries = await Poetry.find({post_by:req.user.email})
            res.render('allPoetry',{poetry:poetries})
        }
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
        res.redirect('/admin/allPoetry/')
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

    if (!id){id = req.body.id}

    try{
        let doc = await Poetry.updateOne({_id:id}, poetry)
        res.redirect('/admin/allPoetry')
    }catch(error){
        res.send(error)
    }
};

module.exports = {showAdd,addPoetry,allPoetry,deletePoetry,loadPoetry,editPoetry}

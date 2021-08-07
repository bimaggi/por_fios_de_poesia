const Poetry = require('../models/Poetry');

const render= (req, res)=>{
    res.render('index',{ results: false })
};

const renderSearch = async(req,res)=>{
    let search = req.query.query
    try{
        let docs = await Poetry.find({tags:{$all: search }})
        res.render('index', { results: true, search: req.query.query, list: docs })
    }catch(error){
        res.send(error)
    }
};


module.exports = {render,renderSearch}

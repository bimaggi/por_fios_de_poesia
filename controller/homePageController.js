const Poetry = require('../models/Poetry');

const render= (req, res)=>{
    res.render('index',{ 
        results: false 
    })
};

const renderSearch = async(req,res)=>{
    let search = req.query.query
    if(search == ''){
        res.render('index', { 
            results: false
        })
    }
    try{
        let docs = await Poetry.find({
            $or: [
                { tags:{$regex: search, $options: '-i'}},
                { author: {$regex: search, $options: '-i' } },
                { title: {$regex: search,$options: '-i' } }
            ],
        })
        res.render('index', { 
            results: true, 
            search: req.query.query, 
            list: docs 
        })
    }catch(error){
        res.send(error)
    }
};


module.exports = {render,renderSearch}

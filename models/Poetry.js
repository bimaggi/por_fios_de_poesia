const mongoose = require("mongoose");

const PoetryShema = new mongoose.Schema({
    title: {type:String, require:true},
    text: {type:String, require:true},
    author: {type:String, require:true},
    tags:[String],
    url: {type:String, require:true},
    click: {type:Number, default:0}
})

module.exports = mongoose.model('Poetry',PoetryShema)
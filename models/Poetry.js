const mongoose = require("mongoose");

const PoetrySchema = new mongoose.Schema({
    title: {type:String, require:true},
    text: {type:String, require:true},
    author: {type:String, require:true},
    url: {type:String, require:true},
    click: {type:Number, default:0},
    tags: [String],
})

module.exports = mongoose.model('Poetry',PoetrySchema)
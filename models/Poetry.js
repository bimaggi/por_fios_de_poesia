const mongoose = require("mongoose");

const PoetrySchema = new mongoose.Schema({
    title: {type:String, required:true},
    text: {type:String, required:true},
    author: {type:String, required:true},
    url: {type:String, required:true},
    click: {type:Number, default:0},
    tags: [String],
})

module.exports = mongoose.model('Poetry',PoetrySchema)
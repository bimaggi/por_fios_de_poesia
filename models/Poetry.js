const mongoose = require("mongoose");
const User = require('../models/User');


const PoetrySchema = new mongoose.Schema({
    title: {type:String, required:true},
    text: {type:String, required:true},
    author: {type:String, required:true},
    url: {type:String},
    tags: [{ type: String, maxlength: 200}],
    createdAt:{type:Date, default: Date.now()},
    post_by:{type: String, required: true},
})

module.exports = mongoose.model('Poetry',PoetrySchema)
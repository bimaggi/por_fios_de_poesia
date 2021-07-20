const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{type: String,required:true, minlenght:3, maxlength:50},
    email:{type: String,required:true, minlenght:3, maxlength:100},
    password:{type: String,required:true, minlenght:7, maxlength: 200},
    admin:{type:Boolean, default:false},
    createdAt:{ type:Date, default:Date.now()}
})

module.exports = mongoose.model('User', UserSchema);
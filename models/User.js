const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{type: String,required:true, minlength:2, maxlength:50},
    email:{type: String,required:true, minlength:10, maxlength:100},
    password:{type: String,required:true, minlength:6, maxlength: 100},
    admin:{type:Boolean, default:false},
    createdAt:{ type:Date, default:Date.now()}
})

module.exports = mongoose.model('User', UserSchema);
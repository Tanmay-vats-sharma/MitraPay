const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Mitrapay");

let userschma = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone_number:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("user",userschma);
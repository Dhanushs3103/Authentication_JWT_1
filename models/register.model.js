//packages
let mongoose = require("mongoose");

//register schema
let registerSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
},{
    versionKey:false
})

// register model
let RegisterModel = mongoose.model("user",registerSchema);

// exporting RegisterModel
module.exports = RegisterModel
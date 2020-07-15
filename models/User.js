const mongoose = require("mongoose");
const { use } = require("passport");
const schema = mongoose.Schema;






//create Schema
const userschema= new schema ({
    name:{
        type:String,
        required:true,
        max_length:200,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },
    bio:{
        type:String,
        default:"User Bio"
    },
    date:{
        type:Date,
        default:Date.now
    }
})





module.exports=mongoose.model('users',userschema)
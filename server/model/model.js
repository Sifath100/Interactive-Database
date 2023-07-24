const mongoose=require("mongoose")

let scheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String
    },
    status:{
        type:String
    }

})

const userdb=mongoose.model("userdb",scheme)
module.exports=userdb

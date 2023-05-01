// import mongoose  from "mongoose";
const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    Name:{
        type:String
    },
    Age:{
        type:Number
    },
    Gender:{
        type:String
    },
    Number:{
        
        type:Number,
    },
    Govt_ID_Type:{
        type:String
    },
    Govt_ID_Number:{
        type:String,
    },
    GuardianDetails:{
        type:String,
    },
    GuardianName:{
        type:String,
       
    },
    Email:{
        type:String,
       

    },
    EmergrncyNo:{
        type:Number,
    },
    Address:{
        type:String,
    },
    State:{
        type:String,
    },
    City:{
        type:String,  
    },
    Country:{
        type:String,
    },
    Pincode:{
        type:Number,
    },
    Occupation:{
        type:String,
    },
    Religion:{
        type:String,
    },
    MaritalStatus:{
        type:String,
    },
    BloodGroup:{
        type:String, 
    },
    Nationality:{
        type:String, 
    }



})
const user=mongoose.model("user",userSchema);

module.exports={user}
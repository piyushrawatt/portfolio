import mongoose, { model } from "mongoose";
let data = new mongoose.Schema({
    name:{type:String , required:true},
    mail:{type:String,required:true},
     message:{type:String,required:true},
},{timestamps:true})
let portfoliodata  = mongoose.model("portfoliodata",data)

export default portfoliodata
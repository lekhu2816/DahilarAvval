import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
 email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
    type:String,
    required:true,
    unique:true
 },
 name:{
    type:String,
    required:true,
    unique:true
 },
 lastLogin:{
  type:Date,
  default :Date.now()
 },
isVerified:{
    type:Boolean,
    default:false
},
resetPasswordToken:String,
resetPasswordTokenExpiresAt:Date,
verificationToken:String,
verificationTokenExpiresAt:Date,
refreshToken:String


},{timestamps:true})


export const userModel=mongoose.model(user,userSchema);
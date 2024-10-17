import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';

const app=express();
const PORT=process.env.PORT||5000
// Database connection
connectDB();

app.get('/',(req,res)=>{
    res.send("Welcome to DahiarAvval")
})




 app.listen(PORT,(error)=>{
 if(error){
    console.log("Server Crashed");
 }
 else{
    console.log(`Server is running in PORT ${PORT}`)
 }
})

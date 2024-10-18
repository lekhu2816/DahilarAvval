import mongoose from "mongoose";
const url=process.env.DATABASE_URL;
const connectDB=async()=>{
    try {
        await mongoose.connect(url);
        console.log("DATABASE CONNECTED SUCCESSFULLY !")
    } catch (error) {
       console.log("ERROR WHILE CONNECTING DATABASE") 
    }
}
export default connectDB;
import mongoose from "mongoose";
const URL = process.env.DATABASE_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting database");
  }
};
export default connectDB;

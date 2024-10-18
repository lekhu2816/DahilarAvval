import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();


app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});

import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Database connection
connectDB();

// endpoint connection
app.use('/api/auth',authRoute);

app.get('/',(req,res)=>{
 res.send("Hello from the DahilarAvval Server")
})

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});

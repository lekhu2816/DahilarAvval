import express from "express"
import { signup,login,logout ,verifyUser, resetPassword, forgetPassword} from "../controller/userAuthController.js";
const authRoute=express.Router();

authRoute.post('/signup',signup);
authRoute.post('/verify',verifyUser);
authRoute.post('/login',login);
authRoute.post('/logout',logout);
authRoute.post('/forget-password',forgetPassword);
authRoute.post('/reset-password',resetPassword);

export default authRoute;

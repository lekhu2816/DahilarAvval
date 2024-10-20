import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
import { userModel } from "../models/userModel.js";
import { generateOTP } from "../utils/generateOTP.js";
import { generateToken } from "../utils/generateToken.js";
import generateHashedPassword from "../utils/hashedPassword.js";
import { sendVerificationMail, sendWelcomeMail ,sendResetPasswordEmail} from "../utils/mailtrap.js";

//--------------------------------user signup-------------------------------------//

const signup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      return res.json({
        success: false,
        message: "All Fields are required",
      });
    }

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }
    const hashedPassword = await generateHashedPassword(password);
    const verificationToken = generateOTP();
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 15 * 60 * 1000,
    });

    const user = await newUser.save();

    //  send and otp in the email
    await sendVerificationMail(
      "sachanlekhansh2816@gmail.com",
      verificationToken
    );

    res.status(200).json({
      id: user._id,
      message: "OTP is send to your email",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while creating user",
    });
  }
};

//----------------------------------- verify user---------------------------------//

const verifyUser = async (req, res) => {
  const { userId, otp } = req.body;
  try {
    if (!userId || !otp) {
      return res.status(400).json({
        success: false,
        message: "Please enter the OTP",
      });
    }
    const user = await userModel.findById(userId);
    const currTime = Date.now();
    const timeDifference = currTime - user.verificationTokenExpiresAt;
    if (user.verificationToken != otp || timeDifference > 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    }
    const { accessToken, refreshToken } = generateToken(user._id);
    await userModel.findByIdAndUpdate(userId, {
      isVerified: true,
      refreshToken: refreshToken,
      lastLogin: Date.now(),
      verificationToken: null,
    });

    sendWelcomeMail("sachanlekhansh2816@gmail.com", user.name);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while verifying user",
    });
  }
};

//-------------------------------- user login-----------------------------------//

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
     return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found Please create account",
      });
    }
    if (user.isVerified == false) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (isMatched == false) {
      return res.status(400).json({
        success: false,
        message: "Enter correct password",
      });
    }

    const { accessToken, refreshToken } = generateToken(user._id);

    await userModel.findByIdAndUpdate(user._id,{
      lastLogin:Date.now(),
      refreshToken:refreshToken
    })
   
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occured while login",
    });
  }
};

//------------------------------- user Logout-------------------------------------//

const logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (refreshToken) {
      await userModel.findOneAndUpdate(
        { refreshToken },
        { refreshToken: null }
      );
    }
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).json({
      success: true,
      message: "User Logged Out",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in logout",
    });
  }
};

//----------------------------forget password-------------------------------------//

const forgetPassword=async(req,res)=>{
 const {email}=req.body;

 try {
  
 if(!email){
  return res.status(400).json({
  success:false,
  message:"Enter the Email"
  })
  }
  const user= await userModel.findOne({email:email});
  if(!user){
   return res.status(400).json({
     success:false,
     message:"User not found"
     })
  }
  const resetPasswordToken= jsonwebtoken.sign({email:email},process.env.RESET_PASSWORD_SECRETE_KEY,{expiresIn:'1h'});
  const resetURL = `${process.env.CLIENT_URL}reset-password?token=${resetPasswordToken}`;
  await sendResetPasswordEmail("sachanlekhansh2816@gmail.com",resetURL,user.name);
  res.status(200).json({
   success:true,
   message:"Reset link shared to your email"
  })
 } catch (error) {
  res.status(400).json({
    success:false,
    message:"Error occured in Reset-password"
   })
 }
}

//-----------------------------reset password-------------------------------------//

const resetPassword =async(req,res)=>{
const {token,password}=req.body;
try {
  if(!token||!password){
   return res.status(400).json({
    success:false,
    message:"Invalid credentials"
   })
  }

  const {email}=jsonwebtoken.verify(token,process.env.RESET_PASSWORD_SECRETE_KEY);
  const user=await userModel.findOne({email});

  if(!user){
    return res.status(400).json({
      success:false,
      message:"User does not exist"
     })
  }
  const hashedPassword=await generateHashedPassword(password);
  await userModel.findOneAndUpdate({email:email},{
    password:hashedPassword
  })
  res.status(200).json({
     success:true,
     message:"Password changed successfully"
  })

} catch (error) {
  console.log(error)
  res.status(500).json({
    success:false,
    message:"Error in resetting password"
 })
}
}

export { signup, login, logout, verifyUser,forgetPassword,resetPassword};

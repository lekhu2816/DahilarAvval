import { userModel } from "../models/userModel.js";
import generateHashedPassword from "../utils/hashedPassword.js";
import { sendVerificationMail } from "../utils/mailtrap.js";

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
    const verificationToken = Math.floor(100000 * Math.random());
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
    });

    const user = await newUser.save();

    //  send and otp in the email
    // await sendVerificationMail('sachanlekhansh2816@gmail.com',verificationToken);

    res.status(200).json({
      id:user._id,
      message: "OTP is send to your email",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error while creating user",
    });
  }
};

const verifyUser=async(req,res)=>{

}
const login = async (req, res) => {
  res.json({
    success: true,
    message: "User login Suucessfully",
  });
};
const logout = async (req, res) => {
  res.json({
    success: true,
    message: "User logout Successfully",
  });
};

export { signup, login, logout };

const signup=async(req,res)=>{
 res.json({
    success:true,
    message:"User created Successfully"
 })
}
const login=async(req,res)=>{
    res.json({
        success:true,
        message:"User login Suucessfully"
     })
}
const logout=async(req,res)=>{
    res.json({
        success:true,
        message:"User logout Successfully"
     })
}

export {signup,login,logout}
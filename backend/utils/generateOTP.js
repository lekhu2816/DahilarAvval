export const generateOTP=()=>{
  const otp=  Math.floor(100000 * Math.random());
  return otp;
}

import jsonwebtoken from 'jsonwebtoken'
export const generateToken=(id)=>{
const payload = { userId: id };
const accessToken= jsonwebtoken.sign(payload,process.env.ACCESS_TOKEN_SECRETE_KEY,{expiresIn:'15m'})
const refreshToken=jsonwebtoken.sign(payload,process.env.REFRESH_TOKEN_SECRETE_KEY,{
    expiresIn:'2d'
})

return {
    accessToken:accessToken,
    refreshToken:refreshToken
}
}
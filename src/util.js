const jwt = require('jsonwebtoken')

const generateToken = () => {
  let token = jwt.sign({id:process.env.APP_ID}, process.env.SECRET_KEY)
  return token
}
const validateToken = (context) => {

  let token = context.headers["authorization"]
  if(!token || !token.includes("Bearer "))
    throw new Error("Invalid Token Format")
  
  token = token.split(' ')[1]
  let decoded = jwt.verify(token,process.env.SECRET_KEY)
  
  if(decoded.id !== process.env.APP_ID){
    throw new Error("Invalid Token")
  }

}

const validateKey = async (context) => {
  let key = context.headers["key"]
  if(!key )
    throw new Error("Invalid Key")
  
  if(key !== process.env.APP_ID){
    throw new Error("Invalid Key")
  }
}

module.exports = {
  validateKey,
  generateToken,
  validateToken
}
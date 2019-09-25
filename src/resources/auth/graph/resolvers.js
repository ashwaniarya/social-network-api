
const { generateToken, validateKey, validateToken } = require('./../../../util')
const jwt = require('jsonwebtoken')

const resolvers = {
  Query:{
    getToken: async (parent, args, context) => {
      await validateKey(context)
      let token = generateToken()
      return { token }
    }
  },
  Mutation:{
    login: async (parent, args) => {

      let decoded = jwt.verify(args.token,process.env.SECRET_KEY)
      if(decoded.id !== process.env.APP_ID){
        throw new Error("Invalid Token")
      }
      return true
    }
  }
}

module.exports = resolvers
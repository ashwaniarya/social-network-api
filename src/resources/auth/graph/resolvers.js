
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
    
  }
}

module.exports = resolvers
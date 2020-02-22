const User = require('./../../user/model')
const App = require('./../model')

const { validateToken } = require('./../../../util')
const crypto = require('crypto')
module.exports = resolvers = {
  Query:{

  },
  Mutation:{
    // To create a new App : PROTECTED
    addApp: async ( parent, args, context ) => {
      try{
        let user = await validateToken( context, [ 'god', 'manager'] )
        let buffer = await crypto.randomBytes(48)
        let token = buffer.toString('hex'); 
        let newApp = new App({
          name: args.name,
          secret: token,
          user: user._id
        })

        let savedApp = await newApp.save()
        return savedApp
      }
      catch( error ) {
        throw new Error( error )
      }
    }
  },
  App:{
    // fetch user's information based on id
    user: async ( parent, args) => {
      try{
        let user = await User.findById( parent.user )
        return user
      }
      catch( error ) {
        throw new Error( error )
      }
    }
  }
}
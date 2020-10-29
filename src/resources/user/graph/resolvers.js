const User = require( './../model' )
const { generateToken, validateGatewayAccess } = require('./../../../authUtils')
module.exports = resolvers = {
  Query: {
    
  },
  Mutation: {
    // To sign up app specific : PROTECTED
    signUp: async ( parent, args, context ) => {
      try{

        let app = await validateGatewayAccess(context);
        let isExist = null
        if( args.username || args.email ) {
          isExist = await User.findOne( { username: args.username, email: args.email, app: app._id } )
        }
        if( isExist ){
          // Throw an error 
          throw new Error( 'User Already registered ' )
        }
        else {

          // Create user in database
          let newUser = new User( { ...args } )
          newUser.type = 'normal'
          newUser.email = newUser.email.toString().toLowerCase()
          newUser.app = app._id;
          
          console.log(newUser)
          let savedUser = await newUser.save()

          return true

        }
      }
      catch( error ){
        throw new Error( error )
      }
    },
    // To check if username already exists
    checkUsernameEmail: async ( parent, args ) => {
      try{
        let isExist = null
        if( args.username || args.email ) {
          isExist = await User.findOne( { ...args } )
        }

        if( isExist ){
          return true
        }
        else{
          return false
        }
      }
      catch( error ){
        throw new Error( error )
      }
    },
    // To login : PUBLIC
    login: async ( parent, args ) => {
      try{
        let user = null
        if( args.username ) {
          user = await User.findByCredentials( args.username, args.password )
        }

        if( user ){
          let token = generateToken( user )
          return {
            token
          }
        }
        else{
          throw new Error( 'Invalid Credentials' )
        }
      }
      catch( error ){
        throw new Error( error )
      }
    }
  }
}
const User = require( './../model' )
const { generateToken } = require('./../../../util')
module.exports = resolvers = {
  Query: {
    
  },
  Mutation: {
    // To sign up : PUBLIC
    signUp: async ( parent, args ) => {
      try{
        let isExist = null
        if( args.username || args.email ) {
          isExist = await User.findOne( { ...args } )
        }
        if( isExist ){
          // Throw an error 
          throw new Error( 'User Already registered ' )
        }
        else {

          // Create user in database

          let newUser = new User( { ...args } )
          newUser.type = 'normal'
          newUser.email = newUser.toString().toLowerCase()
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
            token,
            user
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
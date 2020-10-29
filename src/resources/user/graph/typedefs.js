const { gql } = require('apollo-server')

//types
const types = gql`
  type User {
    _id:ID,
    username: String,
    email: String,
    password: String,
    type: TYPE,
    spaces: [ UserSpace ]
  }

  type UserSpace {
    space: Space,
    rol: ROL
  }

  enum ROL {
    admin,
    moderator
  }

  enum TYPE {
    god,
    normal,
    manager
  }

  type AuthUser { 
    token: String
  }
`

//Queries
const queries = `
  
`

//Mutations
const mutations = `
  """ Sign up : PUBLIC """
  signUp ( email: String!, username: String!, password: String!): Boolean
  """ Login : PUBLIC """
  login ( username: String!, password: String!): AuthUser
  """ To check if username already exists : PUBLIC """
  checkUsernameEmail ( username: String, email: String ): Boolean  
`

module.exports = {
  types,
  queries,
  mutations
}
const { gql } = require('apollo-server')

//types
const types = gql`
  type Auth{
    token:String
   }
`

//Queries
const queries = `
   getToken:Auth
`

//Mutations
const mutations = `
   login(token:String!):Boolean

`

module.exports = {
  types,
  queries,
  mutations
}
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

`

module.exports = {
  types,
  queries,
  mutations
}
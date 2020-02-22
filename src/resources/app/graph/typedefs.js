const { gql } = require('apollo-server')

//types
const types = gql`
  type App {
    _id:ID!,
    name: String,
    secret: String,
    createdAt: String,
    user: User
   }
`

//Queries
const queries = `
  
`

//Mutations
const mutations = `
  """ To add new App : PROTECTED """
  addApp( name: String! ): App
`

module.exports = {
  types,
  queries,
  mutations
}
const { gql } = require('apollo-server')

//types
const types = gql`
  type Home {
    _id:ID!,
    name: String,
    secret: String,
    createdAt: String,
    user: User
   }
`

//Queries
const queries = `
  """ Get a single app : PROTECTED """
  getApp(appId:ID!): App
  """ Get multiple apps with or without pagination : PROTECTED """
  getAllApps: [App]
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
const { gql } = require('apollo-server')
//Get resources
const Category = require('./category/graph')
const Wallpaper = require('./wallpaper/graph')
const Auth = require('./auth/graph')
//Import merge 
const { merge } = require('lodash')

//Query 
const Query = gql`
  type Query {
    ${Category.queries},
    ${Wallpaper.queries},
    ${Auth.queries}
  }
`
//Mutations
const Mutations = gql`
  type Mutation {
    ${Category.mutations},
    ${Wallpaper.mutations},
    ${Auth.mutations}
  }
`
//Resolvers
const resolvers = merge(Category.resolvers,Wallpaper.resolvers, Auth.resolvers)

//Combine typeDefs
let typeDefs = [
  Query,
  Mutations,
  Category.types,
  Wallpaper.types,
  Auth.types
]

module.exports = {
  typeDefs,
  resolvers
}
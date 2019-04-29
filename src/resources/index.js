const { gql } = require('apollo-server')
//Get resources
const Category = require('./category/graph')
const Wallpaper = require('./wallpaper/graph')

//Import merge 
const { merge } = require('lodash')

//Query 
const Query = gql`
  type Query {
    ${Category.queries},
    ${Wallpaper.queries}
  }
`
//Mutations
const Mutations = gql`
  type Mutation {
    ${Category.mutations},
    ${Wallpaper.mutations}
  }
`
//Resolvers
const resolvers = merge(Category.resolvers,Wallpaper.resolvers)

//Combine typeDefs
let typeDefs = [
  Query,
  Mutations,
  Category.types,
  Wallpaper.types
]

module.exports = {
  typeDefs,
  resolvers
}
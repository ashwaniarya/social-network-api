const { gql } = require('apollo-server')
//Get resources
const Space = require('./space/graph')
const Post = require('./post/graph')
const Auth = require('./auth/graph')
const User = require( './user/graph' )
const App = require( './app/graph' )

//Import merge 
const { merge } = require('lodash')

//Query 
const Query = gql`
  type Query {
    ${Space.queries},
    ${Post.queries},
    ${Auth.queries},
    ${User.queries},
    ${App.queries}
  }
`
//Mutations
const Mutations = gql`
  type Mutation {
    ${Space.mutations},
    ${Post.mutations},
    ${Auth.mutations},
    ${User.mutations},
    ${App.mutations}
  }
`
//Resolvers
const resolvers = merge( Space.resolvers, Post.resolvers, Auth.resolvers, User.resolvers, App.resolvers )

//Combine typeDefs
let typeDefs = [
  Query,
  Mutations,
  Space.types,
  Post.types,
  Auth.types,
  User.types,
  App.types
]

module.exports = {
  typeDefs,
  resolvers
}
const { gql } = require('apollo-server')

//types
const types = gql`
  type Category{
    _id:ID!,
    title:String!,
    subTitle:String!,
    wallpaper:[Wallpaper],
    priority:Int,
    heightFactor:Float,
  }
`

//Queries
const queries = `
  categories (perCategory:Int):[Category],
  category (_id:ID!):Category
`

//Mutations
const mutations = `
  addCategory(title:String!,subTitle:String!,priority:Int,heightFactor:Float):Category
  removeCategory(id:String!):Category

  `

module.exports = {
  types,
  queries,
  mutations
}
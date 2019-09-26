const { gql } = require('apollo-server')

//types
const types = gql`
  type Category{
    _id:ID!,
    title:String!,
    subTitle:String,
    wallpaper:[Wallpaper],
    priority:Int,
    parent:Category
   }
`

//Queries
const queries = `
  categories (perCategory:Int):[Category],
  category (_id:ID!):Category
`

//Mutations
const mutations = `
  """ Add a category """
  addCategory(title:String!,subTitle:String!,priority:Int,parent:ID):Category

  """ Remove Category """
  removeCategory(id:String!):Category

  """ Modify Category """
  modifyCategory(_id:ID!,title:String,subTitle:String,priority:Int,parent:ID):Category
`

module.exports = {
  types,
  queries,
  mutations
}
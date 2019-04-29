const { gql } = require('apollo-server')

//types
const types = gql`
  type Wallpaper{
    _id:ID!,
    title:String!,
    user:String,
    views:Int,
    category:Category,
    likes:Int,
    url:String!,
    download:Int,
    set:Int,
    share:Int
  }
`

//Queries
const queries = `
  wallpapers:[Wallpaper],
  wallpaper (_id:ID!):Wallpaper
`

//Mutations
const mutations =  `
  addWallpaper(title:String!,url:String!,category:ID!):Wallpaper
  removeWallpaper(_id:String!):Wallpaper
`

module.exports = {
  types,
  queries,
  mutations
}
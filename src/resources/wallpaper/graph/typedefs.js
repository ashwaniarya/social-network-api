const { gql } = require('apollo-server')

//types
const types = gql`
  type Wallpaper{
    _id:ID!,
    title:String!,
    user:String,
    views:Int,
    category:[Category],
    likes:Int,
    url:String!,
    download:Int,
    set:Int,
    share:Int,
    premium:Boolean
  }
`

//Queries
const queries = `
  wallpapers:[Wallpaper],
  trendingWallpaper(category:ID!,skip:ID):[Wallpaper],
  wallpaper (_id:ID!):Wallpaper
`

//Mutations
const mutations =  `
  """ Add a new wallpaper """
  addWallpaper(title:String!,url:String!,category:[ID!],premium:Boolean):Wallpaper
  removeWallpaper(_id:String!):Wallpaper

  """ Modify a wallpaper """ 
  modifyWallpaper(_id:ID!,download:Int,premium:Boolean):Wallpaper
`

module.exports = {
  types,
  queries,
  mutations
}
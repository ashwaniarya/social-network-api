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
    priority:Int,
    premium:Boolean
  }
`

//Queries
const queries = `
  wallpapers(category:ID,pageNumber:Int,limit:Int):[Wallpaper],
  trendingWallpaper(category:ID!,skip:ID):[Wallpaper],
  wallpaper (_id:ID!):Wallpaper
`

//Mutations
const mutations =  `
  """ Add a new wallpaper """
  addWallpaper(title:String!,url:String!,category:[ID!],premium:Boolean,priority:Int):Wallpaper
  removeWallpaper(_id:String!):Wallpaper

  """ Modify a wallpaper """ 
  modifyWallpaper(_id:ID!,download:Int,premium:Boolean,priority:Int):Wallpaper
`

module.exports = {
  types,
  queries,
  mutations
}
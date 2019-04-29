
const Wallpaper = require('../model')
const Category = require('../../category/model')

const resolvers = {
  Query:{
    wallpapers: async (obj,args)=>{
      let wallpepers = await Wallpaper.find({})
      let json =  JSON.parse(JSON.stringify(wallpepers))
      return json 
    },
    wallpaper: async (obj,args)=>{
      let wallpaper = await Wallpaper.findById(args._id)
      let json =  JSON.parse(JSON.stringify(wallpaper))
      return json 
    },
  },
  Wallpaper:{ 
    category: async (obj,args)=>{
      let category = await Category.findById(obj.category)
      let json =  JSON.parse(JSON.stringify(category))
      return json 
    }
  },
  Mutation:{
    addWallpaper: async (obj,args)=>{
      let newWallpaper = new Wallpaper()
      newWallpaper.title = args.title
      newWallpaper.url = args.url
      newWallpaper.category = args.category

      let wallpaper = await newWallpaper.save()
      let json =  JSON.parse(JSON.stringify(wallpaper))
      return json
    },
    removeWallpaper: async (obj,args)=>{
      let wallpaper = await Wallpaper.findById(args._id)
      await Wallpaper.findByIdAndRemove(wallpaper._id)
      let json =  JSON.parse(JSON.stringify(wallpaper))
      return json
    }
  }
}

module.exports = resolvers
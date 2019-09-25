
const Wallpaper = require('../model')
const Category = require('../../category/model')
const { validateToken } = require('./../../../util')

const resolvers = {
  Query:{
    wallpapers: async (obj,args, context)=>{
      await validateToken(context)

      let wallpapers = await Wallpaper.find({})
      let json =  JSON.parse(JSON.stringify(wallpapers))
      return json 
    },
    wallpaper: async (obj,args, context)=>{
      await validateToken(context)

      let wallpaper = await Wallpaper.findById(args._id)
      let json =  JSON.parse(JSON.stringify(wallpaper))
      return json 
    },
    trendingWallpaper: async (obj,args, context)=>{
      await validateToken(context)

      let wallpapers = await Wallpaper.find({category:args.category,_id:{$ne:args.skip}})
      let json =  JSON.parse(JSON.stringify(wallpapers))
      return json

    }
  },
  Wallpaper:{ 
    category: async (obj,args)=>{
      let category = await Category.find({_id:{$in:obj.category}})
      let json =  JSON.parse(JSON.stringify(category))
      return json 
    }
  },
  Mutation:{
    addWallpaper: async (obj,args, context)=>{
      await validateToken(context)

      let newWallpaper = new Wallpaper()
      newWallpaper.title = args.title
      newWallpaper.url = args.url
      newWallpaper.category = [...args.category]
      newWallpaper.premium = args.premium

      let wallpaper = await newWallpaper.save()
      let json =  JSON.parse(JSON.stringify(wallpaper))
      return json
    },
    removeWallpaper: async (obj,args, context)=>{
      await validateToken(context)

      let wallpaper = await Wallpaper.findById(args._id)
      await Wallpaper.findByIdAndRemove(wallpaper._id)
      let json =  JSON.parse(JSON.stringify(wallpaper))
      return json
    },
    modifyWallpaper: async (obj, args, context) => {
      await validateToken(context)
      
      let wallpaper = {}
      if(args.download)
        wallpaper = await Wallpaper.findByIdAndUpdate(args._id,{$inc:{download:args.download}},{new:true})
      else if(args.premium){
        wallpaper = await Wallpaper.findByIdAndUpdate(args._id,{$set:{premium:args.premium}},{new:true})
      }
      return wallpaper
    }
  }
}

module.exports = resolvers
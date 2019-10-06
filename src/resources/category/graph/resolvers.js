
const Category = require('../model')
const Wallpaper = require('../../wallpaper/model')
const { validateToken } = require('./../../../util')


const resolvers = {
  Query:{
    categories: async (obj, args, context)=>{
      await validateToken(context)
      let categories = []
      if(args.pageNumber){
        if(args.limit){
          categories = await Category.find({})
            .sort({priority:-1})
            .skip((args.pageNumber-1) * args.limit)
            .limit(args.limit)
        }
        else{
          categories = await Category.find({})
            .sort({priority:-1})
            .skip((args.pageNumber-1) * 5)
            .limit(5)
            
        }
        
      }
      else{
        categories = await Category.find({})
        .sort({priority:-1})
      }
      
      let json =  JSON.parse(JSON.stringify(categories))
      return json      
    },
    category: async (obj, args, context)=>{
      await validateToken(context)

      let category = await Category.findById(args._id)
      let json =  JSON.parse(JSON.stringify(category))
      return json 
    }
  },
  Category:{
    wallpaper: async (obj,args) => {
      //console.log(obj,args)
      let wallpapers = await Wallpaper.find({category:obj._id}).sort({priority:-1}).limit(5)
      let json =  JSON.parse(JSON.stringify(wallpapers))
      return json    
    },
    allWallpaper: async (obj,args) => {
      //console.log(obj,args)
      let wallpapers = await Wallpaper.find({category:obj._id}).sort({priority:-1})
      let json =  JSON.parse(JSON.stringify(wallpapers))
      return json    
    },
    parent: async (obj, args) => {
      let category = await Category.findOne({_id:obj._id})
      let json =  JSON.parse(JSON.stringify(category))
      return json
    }
  },
  Mutation:{
    addCategory: async (obj,args, context)=>{
      await validateToken(context)

      let newCategory = new Category()

      newCategory.title = args.title
      newCategory.subTitle = args.subTitle
      if(args.priority){
        newCategory.priority = args.priority
      }
      if(args.parent){
        newCategory.parent = args.parent
      }

      
      let category = await newCategory.save({})
      let json =  JSON.parse(JSON.stringify(category))
      return json 
    },
    removeCategory: async (obj,args, context)=>{
      await validateToken(context)

      let cat = await Category.findById(args.id)
      await Wallpaper.remove({category:cat._id})
      await Category.findByIdAndRemove(cat._id)
      let json =  JSON.parse(JSON.stringify(cat))
      return json 
    },
    modifyCategory: async (obj, args, context) => {
      await validateToken(context)
      console.log(args)
      let updatedCat = await Category.findByIdAndUpdate(args._id,{$set:{...args}},{new:true})
      let json =  JSON.parse(JSON.stringify(updatedCat))
      return json  
    }
  }
}

module.exports = resolvers
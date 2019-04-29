
const Category = require('../model')
const Wallpaper = require('../../wallpaper/model')

const resolvers = {
  Query:{
    categories: async ()=>{
      let categories = await Category.find({})
                              .sort({priority:-1})
      let json =  JSON.parse(JSON.stringify(categories))
      return json      
    },
    category: async (obj,args)=>{
      let category = await Category.findById(args._id)
      let json =  JSON.parse(JSON.stringify(category))
      return json 
    }
  },
  Category:{
    wallpaper: async (obj,args) => {
      let wallpapers = await Wallpaper.find({category:obj._id})
      let json =  JSON.parse(JSON.stringify(wallpapers))
      return json    
    }
  },
  Mutation:{
    addCategory: async (obj,args)=>{
      let newCategory = new Category()

      newCategory.title = args.title
      if(args.priority){
        newCategory.priority = args.priority
      }
      if(args.heightFactor){
        newCategory.heightFactor = args.heightFactor
      }

      let category = await newCategory.save({})
      let json =  JSON.parse(JSON.stringify(category))
      return json 
    },
    removeCategory: async (obj,args)=>{
      let cat = await Category.findById(args.id)
      await Wallpaper.remove({category:cat._id})
      await Category.findByIdAndRemove(cat._id)
      let json =  JSON.parse(JSON.stringify(cat))
      return json 
    }
  }
}

module.exports = resolvers
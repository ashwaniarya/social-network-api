
const Post = require('../model')
const Space = require('../../space/model')
const User = require('../../user/model')

const { validateToken, validateGatewayAccess } = require('../../../util')

const resolvers = {
  Query:{
    posts: async (obj, args, context)=>{
      await validateToken(context)
      let posts = []
      limit = 5
      //with space 
      if(args.space){
        if(args.pageNumber){
          //fetch paginated posts of a space
          if(args.limit) limit = args.limit
          posts = await Post.find({space:args.space}).sort({priority:-1}).skip((args.pageNumber-1) * limit).limit(limit)
        }
        else{
          //fetch all posts of a space
          posts = await Post.find({space:args.space}).sort({priority:-1})   
        }
      }
      //without space
      else{
        if(args.pageNumber){
          //fetch pagenated posts from all categories
          if(args.limit) limit = args.limit
          posts = await Post.find({}).sort({priority:-1}).skip((args.pageNumber-1) * limit).limit(limit)
        }
        else{
          //fetch all posts from all categories
          posts = await Post.find({}).sort({priority:-1})   
        }
      }
      
      return posts 
    },
    /**
     * @description Get all pending posts to moderator and god
     */
    getPendingPosts: async (parent, args, context) => {

    },
    post: async ( obj, args, context )=>{
      await validateToken(context, 'all')

      let post = await Post.findById(args._id)
      return post
    },
    trendingPost: async (obj,args, context)=>{
      await validateToken(context)
      let posts = await Post.find({space:args.space,_id:{$ne:args.skip}})
      let json =  JSON.parse(JSON.stringify(posts))
      return json
    }
  },
  Post:{ 
    space: async ( obj, args)=>{
      let space = await Space.findOne({_id:obj.space})
      let json =  JSON.parse(JSON.stringify(space))
      return json 
    },
    user: async ( obj, args)=>{
      let user = await User.findOne({_id:obj.user})
      return user 
    },
  },
  Mutation:{
    addPost: async ( obj, args, context)=>{
      await validateGatewayAccess( context )
      let user = await validateToken( context )
      let space = await Space.findOne({ _id: args.space })
      if(!space) throw new Error("Space Does't Exists!")
      let newPost = new Post({ ...args })
      // newPost.title = args.title
      // newPost.type = args.type
      // newPost.space = args.space
      // newPost.premium = args.premium
      // newPost.priority = args.priority
      newPost.status = "pending"
      newPost.user = user._id
      let post = await newPost.save()
      return post
    },
    removePost: async ( obj, args, context)=>{
      await validateGatewayAccess( context )
      let user = await validateToken(context)
      let post = await Post.findById(args._id)

      if( user.type === "god" ){
        await Post.findByIdAndRemove(post._id)
        return post
      }
      if( user._id === post.user ){
        await Post.findByIdAndRemove(post._id)
        return post
      }

      let spaceUser = await SpaceUser.find({ space: post.space, user: user._id, type: "admin"})
      if(!spaceUser) throw new Error('Access Denied')
      await Post.findByIdAndRemove(post._id)
      return post

    },
    modifyPost: async ( obj, args, context) => {
      await validateToken(context)
      
      // let post = {}
      // if(args.download)
      //   post = await Post.findByIdAndUpdate(args._id,{$inc:{download:args.download}},{new:true})
      // else{
      //   post = await Post.findByIdAndUpdate(args._id,{$set:{...args}},{new:true})
      // }
      // return post
    }
  }
}

module.exports = resolvers
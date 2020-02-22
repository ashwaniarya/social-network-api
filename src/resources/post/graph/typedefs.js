const { gql } = require('apollo-server')

//types
const types = gql`
  type Post{
    _id:ID!,
    title:String!,
    views:Int,
    space: Space,
    user: User,
    likes:Int,
    type: POST_TYPE,
    url:String!,
    download:Int,
    set:Int,
    share:Int,
    priority:Int,
    premium:Boolean,
    status: POST_STATUS
  }

  enum POST_TYPE {
    link,
    image,
    video
  }

  enum POST_STATUS {
    active,
    inactive,
    pending
  }
`

//Queries
const queries = `
  """ Get list of particulat post """
  posts(space:ID, pageNumber:Int, limit:Int):[Post],

  """ Get trending posts """
  trendingPost(space:ID!,skip:ID):[Post],

  """ Get trending posts : PRIVATE """
  getPendingPosts(space:ID!): [Post],

  """ Get a particular post """
  post (_id:ID!): Post
`

//Mutations
const mutations =  `
  """ Add a new post """
  addPost( title: String!, url: String! ,type: String!, space: ID!, premium: Boolean, priority:Int ): Post

  """ Remove a post : PRIVATE """
  removePost( _id: String! ):Post

  """ Modify a post """ 
  modifyPost(_id:ID!,download:Int,premium:Boolean,priority:Int):Post
`

module.exports = {
  types,
  queries,
  mutations
}
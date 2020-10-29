const { gql } = require("apollo-server");
const { POST_STATUS_ENUM, POST_TYPE_ENUM } = require("./../model/postConst");

const enums = `
  enum POST_STATUS_ENUM {
    ${POST_STATUS_ENUM.join(",")}
  }

  enum POST_TYPE_ENUM {
    ${POST_TYPE_ENUM.join(",")}
  }
`;
//types
const types = gql`
  type Post {
    _id: ID!
    parent: ID
    title: String!
    views: Int
    space: Space
    user: User
    likes: Int
    type: POST_TYPE_ENUM
    url: String
    download: Int
    set: Int
    share: Int
    priority: Int
    premium: Boolean
    status: POST_STATUS_ENUM
  }

  ${enums}
`;

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
`;

//Mutations
const mutations = `
  """ Add a new post """
  addPost( title: String!, url: String! ,type: String!, space: ID, premium: Boolean, priority:Int ): Post

  """ Remove a post : PRIVATE """
  removePost( _id: String! ):Post

  """ Modify a post """ 
  modifyPost(_id:ID!,download:Int,premium:Boolean,priority:Int):Post
`;

module.exports = {
  types,
  queries,
  mutations,
};

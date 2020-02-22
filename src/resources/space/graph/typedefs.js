const { gql } = require('apollo-server')

//types
const types = gql`
  type Space {
    _id:ID!,
    spaceName:String!,
    subSpaceName:String,
    post:[Post],
    priority:Int,
    parent:Space,
    users:[ User ],
    postLimit:Int
   }
`

//Queries
const queries = `
  spaces ( perSpace: Int, pageNumber:Int, limit:Int ): [Space],
  space (_id:ID!): Space,
  getPosts ( status: String ): [ Post ]
`

//Mutations
const mutations = `
  """ Add a space : PROTECTED """
  addSpace( spaceName: String!, subSpaceName: String, priority: Int, parent: ID ): Space

  """ Remove Space : PROTECTED"""
  removeSpace( spaceId: String!):Space

  """ Modify Space """
  modifySpace( _id:ID!, spaceName:String, subSpaceName:String, priority:Int, parent:ID ):Space
`

module.exports = {
  types,
  queries,
  mutations
}
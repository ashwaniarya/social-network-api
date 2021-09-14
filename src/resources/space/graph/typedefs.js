const { gql } = require("apollo-server");
const {
  SPACE_STATUS_ENUM,
  SPACE_VISIBLITY_ENUM,
} = require("./../model/spaceConst");
// Enums
const enums = `
  enum SPACE_STATUS_ENUM {
    ${SPACE_STATUS_ENUM.join(",")}
  }

  enum SPACE_VISIBLITY_ENUM {
    ${SPACE_VISIBLITY_ENUM.join(",")}
  }
`;
//types
const types = gql`
  type Space {
    _id: ID!
    spaceName: String!
    subSpaceName: String
    post: [Post]
    priority: Int
    parent: Space
    status: SPACE_STATUS_ENUM
    visiblity: SPACE_VISIBLITY_ENUM
    users: [User]
    postLimit: Int
  }

  ${enums}
`;

//Queries
const queries = `
  spaces ( perSpace: Int, pageNumber:Int, limit:Int ): [Space],
  space (_id:ID!): Space
`;

//Mutations
const mutations = `
  """ Add a space : PROTECTED """
  addSpace( spaceName: String!, subSpaceName: String, priority: Int, parent: ID ): Space

  """ Remove Space : PROTECTED """
  removeSpace( spaceId: String!):Space
  
  """ Modify Space : PROTECTED """
  modifySpace( _id:ID!, spaceName:String, subSpaceName:String, priority:Int, parent:ID ):Space

`;

module.exports = {
  types,
  queries,
  mutations,
};

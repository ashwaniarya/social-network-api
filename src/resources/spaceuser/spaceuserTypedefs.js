const { gql } = require("apollo-server");
const {
  SPACE_USER_RELATION_ENUM,
  SPACE_USER_STATUS_ENUM,
} = require("./spaceuserConst");

// Enums
const enums = `
  enum SPACE_USER_RELATION_ENUM {
    ${SPACE_USER_RELATION_ENUM.join(",")}
  }
  enum SPACE_USER_STATUS_ENUM {
    ${SPACE_USER_STATUS_ENUM.join(",")}
  }
`;

//types
const types = gql`
  type SpaceUser {
    space: Space
    user: User
    relation: SPACE_USER_RELATION_ENUM
    status: SPACE_USER_STATUS_ENUM
    createdAt: String
  }
  ${enums}
`;

//Queries
const queries = `
  getJoinedSpace:[Space]
`;

//Mutations
const mutations = `
  """ Join a space """
  joinSpace(spaceId:ID!): SpaceUser
`;

module.exports = {
  types,
  queries,
  mutations,
};

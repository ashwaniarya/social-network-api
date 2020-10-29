const { gql } = require("apollo-server");
//Get resources
const Space = require("./resources/space/graph");
const Post = require("./resources/post/graph");
const Auth = require("./resources/auth/graph");
const User = require("./resources/user/graph");
const App = require(".//resources/app/graph");
const Permission = require("./resources/permissions");
const SpaceUser = require('./resources/spaceuser')

//Import merge
const { merge } = require("lodash");


//Query
const Query = gql`
  type Query {
    ${Space.queries},
    ${Post.queries},
    ${Auth.queries},
    ${User.queries},
    ${App.queries},
    ${Permission.queries},
    ${SpaceUser.queries}
  }
`;
//Mutations
const Mutations = gql`
  type Mutation {
    ${Space.mutations},
    ${Post.mutations},
    ${Auth.mutations},
    ${User.mutations},
    ${App.mutations},
    ${Permission.mutations},
    ${SpaceUser.mutations}
  }
`;
//Resolvers
const resolvers = merge(
  Space.resolvers,
  Post.resolvers,
  Auth.resolvers,
  User.resolvers,
  App.resolvers,
  Permission.resolvers,
  SpaceUser.resolvers
);

//Combine typeDefs
let typeDefs = [
  Query,
  Mutations,
  Permission.inputs,
  Permission.unions,
  Space.types,
  Post.types,
  Auth.types,
  User.types,
  App.types,
  Permission.types,
  SpaceUser.types
];

module.exports = {
  typeDefs,
  resolvers
};

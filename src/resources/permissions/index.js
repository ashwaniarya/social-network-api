const resolvers = require("./permissionResolvers");
const { unions, types, queries, mutations, inputs } = require("./permissionTypeDefs");

module.exports = {
  unions,
  resolvers,
  types,
  queries,
  mutations,
  inputs
};

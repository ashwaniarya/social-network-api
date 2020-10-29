const resolvers = require("./spaceuserResolvers");
const { unions, types, queries, mutations, inputs } = require("./spaceuserTypedefs");

module.exports = {
  unions,
  resolvers,
  types,
  queries,
  mutations,
  inputs
};

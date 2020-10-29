const resolvers = require("./permissionResolvers");
const typeDefs = require("./permissionTypeDefs");

module.exports = {
  ...typeDefs,
  resolvers
};

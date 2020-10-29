const Permission = require("./permissionModel");
const Space = require("./../space/model");
const { validateToken, validateGatewayAccess } = require("../../authUtils");

module.exports = resolvers = {
  Resource: {
    __resolveType(obj, context, info) {
      if (obj.spaceName) {
        return "Space";
      }
      return null;
    },
  },
  Permission: {
    context: async (parent, args, context) => {
      if (parent.context === "Space") {
        let space = await Space.findOne({ _id: parent.applysOn });
        console.log(space);
        return space;
      }
    },
  },
  Query: {
    getPermissions: async (parent, args, context) => {
      await validateGatewayAccess(context);
      let user = await validateToken(context, ["god", "manager"]);
      try {
        if (user.type === "god") {
          return Permission.find({});
        } else {
          //Write whats happens in case of manager is the requester
          return null;
        }
      } catch (e) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createPermission: async (parent, args, con) => {
      let user = await validateToken(con, ["god", "manager"]);
      try {
        if (user.type === "god") {
          let newPermission = new Permission({
            context: args.context,
            applysOn: args.applysOn,
            roleName: args.roleName,
            ...args.permission,
          });
          return await newPermission.save();
        } else {
          await validateGatewayAccess(con);
          //Write whats happens in case of manager is the requester
          return null;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

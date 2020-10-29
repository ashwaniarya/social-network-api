const SpaceUser = require("./spaceuserModal");
const Space = require("./../space/model/index");
const Permission = require("./../permissions/permissionModel");
const User = require("./../user/model/index");
const { validateToken, validateGatewayAccess } = require("../../authUtils");
module.exports = resolver = {
  Query: {},
  Mutation: {
    joinSpace: async (parent, args, context) => {
      try {
        await validateGatewayAccess(context);
        let user = await validateToken(context);
        // Join space based on space's visiblity
        let spaceuser = await SpaceUser.findOne({
          user: user._id,
          space: args.spaceId,
        });
        if (spaceuser) {
          throw new Error("Already a member");
        }
        // Check if space id is valid
        let space = await Space.findOne({ _id: args.spaceId });
        if (!space) throw new Error("Invalid space id");

        let permission = await Permission.findOne({
          context: "Space",
          applysOn: space._id,
        });

        let newSpaceUser = new SpaceUser({
          user: user._id,
          space: space._id,
          relation: "normal",
        });
        // Private
        if (space.visiblity === "private") {
          newSpaceUser.status = "pending";
        }
        // Public
        if (space.visiblity === "public") {
          newSpaceUser.status = "approved";
        }
        if (permission && permission.onJoinSpaceStatus)
          newSpaceUser.status = permission.onJoinSpaceStatus;
        return await newSpaceUser.save();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

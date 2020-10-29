const Space = require("../model");
const Post = require("../../post/model");
const User = require("../../user/model");
const SpaceUser = require("../../spaceuser/spaceuserModal");
const { validateToken, validateGatewayAccess } = require("../../../authUtils");
const { find } = require("lodash");
const { findResourcePaginated } = require("./../../resourceUtils");

const resolvers = {
  Query: {
    spaces: async (obj, args, context) => {
      try {
        let user = await validateToken(context, "all");
        let spaces = [];
        let query = {};

        if (user.type === "god") {
          // For god
          spaces = await findResourcePaginated(
            Space,
            {},
            args.pageNumber,
            args.limit,
            { priority: -1 }
          );
        } else {
          // For moderators and normal users
          let app = await validateGatewayAccess(context);
        }
        return spaces;
      } catch (error) {
        throw new Error(error);
      }
    },
    space: async (obj, args, context) => {
      await validateToken(context);

      let space = await Space.findById(args._id);
      let json = JSON.parse(JSON.stringify(space));
      return json;
    },
  },
  Space: {
    post: async (obj, args) => {
      //console.log(obj,args)
      let posts = await Post.find({ space: obj._id, status: "active" })
        .sort({ priority: -1 })
        .limit(5);
      let json = JSON.parse(JSON.stringify(posts));
      return json;
    },
    parent: async (obj, args) => {
      let space = await Space.findOne({ _id: obj._id });
      let json = JSON.parse(JSON.stringify(space));
      return json;
    },
  },
  Mutation: {
    addSpace: async (obj, args, context) => {
      try {
        await validateGatewayAccess(context);
        let user = await validateToken(context, ["god"]);
        let newSpace = new Space();
        newSpace.spaceName = args.spaceName;
        newSpace.subSpaceName = args.subSpaceName;
        if (args.priority) {
          newSpace.priority = args.priority;
        }
        if (args.parent) {
          newSpace.parent = args.parent;
        }
        let space = await newSpace.save({});
        if (space) {
          let newSpaceUser = new SpaceUser({
            space: space._id,
            user: user._id,
            type: "admin",
          });

          let savedSpaceUser = await newSpaceUser.save();
          if (savedSpaceUser) return space;
          else {
            await Space.findOneAndRemove({ _id: space._id });
            throw new Error(
              "Internal Server Error : Unable to create space and user relation ship"
            );
          }
        } else {
          throw new Error("Internal Server Error : Unable to create space");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    removeSpace: async (obj, args, context) => {
      try {
        await validateGatewayAccess(context);
        let user = await validateToken(context, ["god", "normal"]);
        let spaceUser = await SpaceUser.find({
          space: args.spaceId,
          user: user._id,
          type: "admin",
        });
        if (!spaceUser) throw new Error("Access Denied");

        // Selete all documents
        await SpaceUser.remove({ space: args.spaceId });

        // Remove space
        await Post.replaceOne({ space: args.spaceId });
        return deletedSpace;
      } catch (error) {
        throw new Error(error);
      }
    },
    modifySpace: async (obj, args, context) => {
      await validateToken(context, ["god"]);
      console.log(args);
      let updatedCat = await Space.findByIdAndUpdate(
        args._id,
        { $set: { ...args } },
        { new: true }
      );
      let json = JSON.parse(JSON.stringify(updatedCat));
      return json;
    },
  },
};

module.exports = resolvers;

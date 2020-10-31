const User = require("./../../user/model");
const App = require("./../model");

const { validateToken } = require("./../../../authUtils");
const crypto = require("crypto");
module.exports = resolvers = {
  Query: {
    // Get a single app : PROTECTED
    getApp: async (parent, args, context) => {
      try {
        let user = await validateToken(context, ["god", "manager"]);
        let app = null;
        if (user.type === "god") {
          // In case of god
          app = await App.findById(args.appId);
          return app;
        } else {
          // In case of manager
          app = await App.findOne({ _id: args.appId, user: user._id });
          return app;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    // Get a single app : PROTECTED
    getAllApps: async (parent, args, context) => {
      try {
        let user = await validateToken(context, ["god", "manager"]);
        console.log(user.type);
        let app = null;
        if (user.type === "god") {
          // In case of god
          app = await App.find({});
          return app;
        } else {
          // In case of manager
          app = await App.find({ user: user._id });
          return app;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    // To create a new App : PROTECTED
    addApp: async (parent, args, context) => {
      try {
        let user = await validateToken(context, ["god", "manager"]);
        let buffer = await crypto.randomBytes(48);
        let token = buffer.toString("hex");
        let newApp = new App({
          name: args.name,
          secret: token,
          user: user._id,
        });
        let savedApp = await newApp.save();
        return savedApp;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  App: {
    // fetch user's information based on id
    user: async (parent, args) => {
      try {
        let user = await User.findById(parent.user);
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

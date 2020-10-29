const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");
// Local imports
const User = require("./resources/user/model");
const App = require("./resources/app/model");

/**@param { object } user  User's information
 * @description Used to generate token
 * @returns Returns token
 */
const generateToken = (user) => {
  let token = jwt.sign({ userid: user._id }, process.env.SECRET_KEY);
  return token;
};
/**
 * @param { object } context Apollo context
 * @param { Array} type Give app type
 * @description onestop function to validate request based on app and api keys
 * @return Return's access
 */
const validateGatewayAccess = async (context, type = ["app"]) => {
  let appId = context.headers["x-appid"];
  let secret = context.headers["x-secret"];
  if (!appId && !secret) throw new Error("Invalid App Credentials");
  else {
    if (!Types.ObjectId.isValid(appId))
      throw new Error("Invalid App Credentials");

    let app = await App.findOne({ _id: appId, secret });
    if (!app) throw new Error("Invalid App Credentials");
    return app;
  }
};
/**
 * @description onestop function to validate token
 * @param { object } context Apollo context
 * @param { Array<String>} type Takes an array of token types. accepted value all, god, manager, normal
 * @returns Return user
 */
const validateToken = async (context, type = ["all"]) => {
  let token = context.headers["authorization"];
  if (!token || !token.includes("Bearer "))
    throw new Error("Invalid Token Format");
  try {
    token = token.split(" ")[1];
    let decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.userid) {
      let user = await User.findOne({ _id: decoded.userid });

      if (user) {
        if (type.includes("all") || type.includes(user.type)) {
          return user;
        } else {
          throw new Error("Unauthorized Access");
        }
      } else {
        throw new Error("Invalid Token");
      }
    } else {
      throw new Error("Invalid Token");
    }
  } catch (error) {
    throw new Error(error);
  }
};

const validateMutationAccess = async (context, resource) => {
  try {
  } catch (error) {}
};

/**
 * @deprecated A new function is available
 * @description Onestop function to validate User's token
 * @param { Object } context Apollo context
 * @returns Return user
 */
const validateUsersToken = async (context) => {
  try {
    let token = context.headers["authorization"];
    if (!token || !token.includes("Bearer "))
      throw new Error("Invalid Token Format");

    token = token.split(" ")[1];
    let decoded = jwt.verify(token, process.env.SECRET_KEY);

    // User existance in database
    let user = await User.findById(decoded.userid);
    if (user === null) {
      throw new Error("Unauthorized Access");
    }
    return {
      user,
    };
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * @deprecated A new function is available
 * @description To validate key
 * @param { Object } context Apollo context
 */
const validateKey = async (context) => {
  let key = context.headers["key"];
  if (!key) throw new Error("Invalid Key");

  if (key !== process.env.APP_ID) {
    throw new Error("Invalid Key");
  }
};

module.exports = {
  validateKey,
  generateToken,
  validateToken,
  validateUsersToken,
  validateGatewayAccess,
};

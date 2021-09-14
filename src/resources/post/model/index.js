const mongoose = require("mongoose");
const { POST_STATUS_ENUM, POST_TYPE_ENUM } = require("./postConst");
const Schema = mongoose.Schema;
let postSchema = new Schema(
  {
    parent: { type: Schema.Types.ObjectId, ref: "Post" },
    title: { type: String, required: true },
    views: { type: Number, default: 0 },
    url: { type: String, default: 0 },
    download: { type: Number, default: 0 },
    keywords: [
      {
        type: String,
      },
    ],
    type: {
      type: String,
      enum: POST_TYPE_ENUM,
    },
    edited: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    deletedAt: { type: Date, default: null },
    priority: { type: Number, default: 0 },
    status: {
      type: String,
      enum: POST_STATUS_ENUM,
      default: "active",
    },
    space: {
      type: Schema.Types.ObjectId,
      ref: "Space",
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    score: {
      type: Number,
      default: 0,
    },
    set: { type: Number, default: 0 },
    share: { type: Number, default: 0 },
    premium: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

let Post = mongoose.model("Post", postSchema);

module.exports = Post;

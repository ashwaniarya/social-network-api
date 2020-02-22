const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {type: String, required: true},
  views: {type: Number, default: 0},
  likes: {type: Number, default: 0},
  url: {type: String, default: 0},
  download: {type: Number, default: 0},
  keywords: [{
    type: String
  }],
  type: {
    type: String,
    enum: [ "link", "image", "video" ]
  },
  timestamp: { type: Date, default: Date.now() },
  priority: { type: Number, default: 0 },
  status: {
    type: String,
    enum: [ "active", "inactive", "pending" ],
    default: 'active'
  },
  space:{
    type:Schema.Types.ObjectId,
    ref:'Space'
  },
  user: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  set: {type: Number, default: 0},
  share: {type: Number, default: 0}, 
  premium:{ type: Boolean, default: false }
}, {
  versionKey: false
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;
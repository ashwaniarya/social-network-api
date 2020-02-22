const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let spaceUserSchema = new Schema({
  space: {
    ref: 'Space',
    type: Schema.Types.ObjectId
  },
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  type: {
    type: String,
    enum: [ "admin", "moderator", "normal" ]
  }
}, {
  versionKey: false
});

let SpaceUser = mongoose.model( 'SpaceUser', spaceUserSchema);

module.exports = SpaceUser;
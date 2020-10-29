const mongoose = require('mongoose');
const { SPACE_USER_RELATION_ENUM } = require('./spaceuserConst')
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
  relation: {
    type: String,
    enum: SPACE_USER_RELATION_ENUM,
    default: 'normal'
  },
  status: { type: String, default: 'pending', },
  createdAt: { type: Date, default: new Date()},
  permissions: {
    type: Schema.Types.ObjectId,
    ref: "Permission"
  }
}, {
  versionKey: false
});

let SpaceUser = mongoose.model( 'SpaceUser', spaceUserSchema);

module.exports = SpaceUser;
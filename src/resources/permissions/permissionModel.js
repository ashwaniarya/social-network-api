const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { POST_STATUS_ENUM } = require('./../post/model/postConst');
const { SPACE_STATUS_ENUM } = require('./../space/model/spaceConst');
const { SPACE_USER_STATUS_ENUM } = require('../spaceuser/spaceuserConst')

let permissionSchema = new Schema({
  context: {
    type: String,
    required: true,
    enum: [ 'Space', 'App', 'User' ]
  },
  applysOn: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'context'
  },
  roleName: {
    type: String,
    required: true,
    default: 'normal'
  },
  canCreatePost: {
    type: Boolean,
    default: false
  },
  canEditPost: {
    type: Boolean,
    default: false
  },
  onCreatePostStatus: {
    type: String,
    enum: POST_STATUS_ENUM,
    default: "pending"
  },
  canDeletePost: {
    type: Boolean,
    default: false
  },
  canCreateSpace: {
    type: Boolean,
    default: false
  },
  canDeleteSpace: {
    type: Boolean,
    deafult: false
  },
  canEditSpace: {
    type: Boolean,
    deafult: false
  },
  onCreateSpaceStatus: {
    type: String,
    enum: SPACE_STATUS_ENUM,
    default: "pending"
  },
  onJoinSpaceStatus: {
    type: String,
    enum: SPACE_USER_STATUS_ENUM,
    default: "approved"
  },
  canChangeSpaceStatus: {
    type: Boolean,
    default: false
  }
},{
  versionKey: false
})

permissionSchema.index({context: 1, applysOn: 1, roleName: 1}, {unique: true});

let Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
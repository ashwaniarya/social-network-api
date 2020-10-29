const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { SPACE_STATUS_ENUM, SPACE_VISIBLITY_ENUM } = require('./spaceConst');

let spaceSchema = new Schema({
  spaceName: { type: String, required: true, unique: true },
  subSpaceName: { type: String, required: false, default: ''},
  priority:{ type: Number, default: 1 },
  app: {
    type: Schema.Types.ObjectId,
    ref:'App'
  },
  parent:{
    ref: 'Space',
    type: Schema.Types.ObjectId
  },
  status:{
    type: String,
    enum: SPACE_STATUS_ENUM,
    default: 'active'
  },
  createdAt: { type: Date, default: new Date()},
  visiblity: { type: String, default: 'public', enum: SPACE_VISIBLITY_ENUM },
  config: {
    postFrequency: { type: Number, default: 0 },
    minUserPoints: { type: Number, default: 0 },
  }
}, {
  versionKey: false
});

let Space = mongoose.model( 'Space', spaceSchema);

module.exports = Space;
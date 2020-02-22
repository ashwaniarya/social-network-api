const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let spaceSchema = new Schema({
  spaceName: { type: String, required: true, unique: true },
  subSpaceName: { type: String, required: false},
  priority:{ type: Number, default: 1 },
  parent:{
    ref: 'Space',
    type: Schema.Types.ObjectId
  },
  status:{
    type: String,
    enum:[ "active", "inactive" ],
    default: 'active'
  },
  config: {
    postFrequency: { type: Number, default: 0 },
    minUserPoints: { type: Number, default: 0 }
  }
}, {
  versionKey: false
});

let Space = mongoose.model( 'Space', spaceSchema);

module.exports = Space;
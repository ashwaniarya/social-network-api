const mongoose = require( 'mongoose' )
const bcryptjs = require('bcryptjs');

let Schema = mongoose.Schema

let appSchema = new Schema({
  name: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  secret: { type: String, default: null },
  createdAt: {
    type: Date, default: Date.now()
  }
})


let App = mongoose.model( 'App', appSchema )
module.exports = App
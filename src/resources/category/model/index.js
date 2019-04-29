const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  title: {type: String, required: true},
  priority:{type:Number,default:1},
  heightFactor:{ type:Number,default:1.778}
}, {
  versionKey: false
});

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;
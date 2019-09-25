const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  title: {type: String, required: true},
  subTitle: {type: String, required: false},
  priority:{type:Number,default:1},
  parent:{
    ref:'Category',
    type: Schema.Types.ObjectId
  }
}, {
  versionKey: false
});

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;
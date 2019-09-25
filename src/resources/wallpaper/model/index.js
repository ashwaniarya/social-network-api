const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wallpaperSchema = new Schema({
  title: {type: String, required: true},
  views: {type: Number, default: 0},
  likes: {type: Number, default: 0},
  url: {type: String, default: 0},
  download: {type: Number, default: 0},
  category:[{
    type:Schema.Types.ObjectId,
    ref:'Category'
  }],
  set: {type: Number, default: 0},
  share: {type: Number, default: 0}, 
  premium:{ type: Boolean, default: false }
}, {
  versionKey: false
});

let Wallpaper = mongoose.model('Wallpaper', wallpaperSchema);

module.exports = Wallpaper;
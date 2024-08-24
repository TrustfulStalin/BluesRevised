const mongoose = require('mongoose')

const SingerSchema = new mongoose.Schema({
  name: {type: String}, 
  facts:{type:Array},
    img:{type:String},
   songs:{type:Array},
  awards:{type:Number},
  description: {type: Array},
  _id:{type:Number},
 
})

const Schema20 = mongoose.model('20s', SingerSchema)

module.exports = Schema20
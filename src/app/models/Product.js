const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const Product = new Schema({
    _id: {type: String, require: true},
    id: {type: String, require: true},
    ten:  {type: String, require: true}, // String is shorthand for {type: String}
    gia: {type: Number, require: true},
    loai: {type: String, require: true},
    url: {type: String, require: true},
    mo_ta: {type: String},
    slug: { type: String, slug: 'ten', unique: true }
  });

module.exports = mongoose.model('Product', Product)

const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
const TypeSchema = require('./Type').TypeSchema

mongoose.plugin(slug)

const Product = new Schema({
    ten:  {type: String, require: true}, // String is shorthand for {type: String}
    gia: {type: Number, require: true},
    loai: {type: TypeSchema, require: true},
    url: {type: String, require: true},
    mo_ta: {type: String},
    slug: { type: String, slug: 'ten', unique: true }
  });

module.exports = mongoose.model('Product', Product)

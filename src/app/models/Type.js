const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const Type = new Schema({
    id:  {type: String, require: true},
    name:  {type: String, require: true},// String is shorthand for {type: String}
    slug: { type: String, slug: 'name', unique: true }
  });

module.exports = mongoose.model('Type', Type)

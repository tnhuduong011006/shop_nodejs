const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

const TypeSchema = new Schema({
    name:  {type: String, require: true}// String is shorthand for {type: String}
  });

const Type =  mongoose.model('Type', TypeSchema)

module.exports = {Type, TypeSchema}

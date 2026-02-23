const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: {type: String, trim: true, required: true, index: true, minlength: 5},
  content: {type: String, required: true, minlength: 10},
  category: {type: String, default: "Personal"},
  tags: {type: [String], default: []}

}, {timestamps: true})

noteSchema.index({
  title: "text",
  content: "text"
})

module.exports = mongoose.model('Note', noteSchema)
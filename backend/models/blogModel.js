const mongoose = require("../connection");

const schema = mongoose.Schema({
  author: { type: String, require: true },
  title: String,
  description: String,
  tags: Array,
  thumbnail: Array,
  data: Object,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("blogs", schema);

module.exports = model;

const mongoose = require("../connection");

const schema = mongoose.Schema({
  title: { type: String, require: true },
  text: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("crud", schema);

module.exports = model;

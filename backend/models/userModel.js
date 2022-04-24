const mongoose = require("../connection");

const schema = mongoose.Schema({
  email: { type: String, require: true },
  username: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;

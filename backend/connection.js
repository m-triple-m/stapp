const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/stapp?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("database successfully connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;

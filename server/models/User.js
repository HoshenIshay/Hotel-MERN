const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  UserName: String,
  UserPassword: String,
  UserType: String,
});

module.exports = mongoose.model("User", UserSchema);
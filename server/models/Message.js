const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  To: String,
  Body: String,
});

module.exports = mongoose.model("Message", MessageSchema);
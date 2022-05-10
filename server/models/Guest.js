const mongoose = require("mongoose");

const GuestSchema = mongoose.Schema({
  Guestname: String,
  Guestroom: Number,
});

module.exports = mongoose.model("Guest", GuestSchema);
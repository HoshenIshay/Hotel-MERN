const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
  roomNumber: Number,
  capacity: Number,
  availability: Boolean,
});

module.exports = mongoose.model("Room", RoomSchema);
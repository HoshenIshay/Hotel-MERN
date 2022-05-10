const router = require("express").Router();
const Room = require("../models/Room");

router.post("/", async (req, res) => {
  const response = await new Room({
    roomNumber: req.body.roomNumber,
    capacity: req.body.capacity,
    availability: req.body.availability,
  }).save();

  res.status(200).send(response);
});

module.exports = router;
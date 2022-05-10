const router = require("express").Router();
const Room = require("../models/Room");

router.post("/", async (req, res) => {
  const filter = {_id:req.body._id};

  const update = {
    roomNumber: req.body.roomNumber,
    capacity: req.body.capacity,
    availability: req.body.availability,
  };

  let doc = await Room.findOneAndUpdate(filter,update);
  res.status(200).send(req.body);
});

module.exports = router;
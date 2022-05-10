const router = require("express").Router();
const Room = require("../models/Room");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  let doc = await Room.deleteOne(filter);
  res.status(200).send(req.body);
});

module.exports = router;
const router = require("express").Router();
const Room = require("../models/Room");

router.get("/", async (req, res) => {
  const response = await Room.find({});

  res.status(200).send(response);
});

module.exports = router;
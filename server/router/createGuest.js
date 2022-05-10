const router = require("express").Router();
const Guest = require("../models/Guest");

router.post("/", async (req, res) => {
  const response = await new Guest({
    Guestname: req.body.Guestname,
    Guestroom: req.body.Guestroom,
  }).save();

  res.status(200).send(response);
});

module.exports = router;
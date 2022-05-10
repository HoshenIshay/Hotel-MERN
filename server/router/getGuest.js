const router = require("express").Router();
const Guest = require("../models/Guest");

router.get("/", async (req, res) => {
  const response = await Guest.find({});

  res.status(200).send(response);
});

module.exports = router;
const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const response = await new User({
    UserName: req.body.UserName,
    UserPassword: req.body.UserPassword,
    UserType: req.body.UserType,
  }).save();

  res.status(200).send(response);
});

module.exports = router;
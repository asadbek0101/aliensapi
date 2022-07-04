const express = require("express");
const router = express.Router();
const User = require("../modules/User");

router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log("Error ", err);
  }
});

router.delete("/logout/:id", async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(req.params.id);
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;

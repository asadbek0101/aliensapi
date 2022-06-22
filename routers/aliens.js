const express = require("express");
const router = express.Router();
const Alien = require("../modules/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    console.log("Error ", err);
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a = await alien.save();
    res.json(a);
  } catch (err) {
    console.log("Error ", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteAlien = await Alien.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteAlien);
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;

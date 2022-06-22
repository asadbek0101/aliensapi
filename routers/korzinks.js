const express = require("express");
const router = express.Router();
const Korzinka = require("../modules/korzinka");

router.get("/", async (req, res) => {
  try {
    const korzinkas = await Korzinka.find();
    res.json("salom");
  } catch (err) {
    console.log("Error ", err);
  }
});

router.post("/", async (req, res) => {
  const korzinkas = new Korzinka({
    title: req.body.name,
    price: req.body.price,
    sub: req.body.sub,
  });

  try {
    const a = await korzinkas.save();
    res.json(a);
  } catch (err) {
    console.log("Error ", err);
  }
});

module.exports = router;

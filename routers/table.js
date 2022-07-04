const express = require("express");
const router = express.Router();
const Table = require("../modules/Table");

router.get("/table", async (req, res) => {
  try {
    const table = await Table.find();
    res.json(table);
  } catch (err) {
    console.log("Error ", err);
  }
});

router.post("/table", async (req, res) => {
  let table = new Table({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    birthday: req.body.birthday,
    penfil: req.body.penfil,
  });
  try {
    const a = await table.save();
    res.json(a);
  } catch (err) {
    console.log("Error ", err);
  }
});

router.get("/table/sort/:sort", async (req, res) => {
  let sort = req.params.sort;
  console.log(sort);
  try {
    let table = await Table.find().sort({ [sort]: 1 });
    res.json(table);
  } catch (err) {
    console.log("Error ", err);
  }
});

router.put("/table/:id", async (req, res) => {
  try {
    let table = await Table.findById(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    (table.name = req.body.name),
      (table.email = req.body.email),
      (table.phone = req.body.phone),
      (table.birthday = req.body.birthday),
      (table.penfil = req.body.penfil);
    table.save();
    res.json(table);
  } catch (err) {
    console.log("Error" + err);
  }
});

router.delete("/table/:id", async (req, res) => {
  try {
    const deleteTable = await Table.deleteOne({ _id: req.params.id });
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(req.params.id);
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;

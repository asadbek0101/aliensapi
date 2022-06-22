const mongoose = require("mongoose");

const korzinkaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sub: {
    type: String,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("Korzinka", korzinkaSchema);

const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  birthday: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  penfil: {
    type: String,
  },
});
module.exports = mongoose.model("Table", tableSchema);

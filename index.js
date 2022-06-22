const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/test";

const app = express();
mongoose.connect(url, { useNewUrlParser: true });

app.use(express.json());

const alienRouter = require("./routers/aliens");
app.use("/aliens", alienRouter);

const korzinkaRouter = require("./routers/korzinks");
app.use("/korzinka", korzinkaRouter);

app.listen(9000, function () {
  console.log("Server started ....");
});

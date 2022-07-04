const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const url = "mongodb://localhost/test";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
mongoose.connect(url, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
app.use(express.json());

const userRouter = require("./routers/auth");
app.use("/", userRouter);

const tableRouter = require("./routers/table");
app.use("/", tableRouter);

const userDelete = require("./routers/user");
app.use("/", userDelete);

app.listen(PORT, function () {
  console.log(`Server started a port ${PORT}`);
});

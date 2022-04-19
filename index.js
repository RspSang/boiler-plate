const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("hello big world");
});
app.get("*", function (req, res) {
  res.status(404).send("<h1>404 Page</h1>");
});
app.listen(process.env.PORT);
console.log("lisntening !");

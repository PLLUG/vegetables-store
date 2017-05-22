const express = require("express");

var app = exports.app = express();

app.get('/', (req, res) => {
  res.end("Hello vegetables store");
});
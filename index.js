const express = require("express");
const app = express();
const expressformidable = require("express-formidable");
const events = require("./olympia/routes/event.js");

app.use(expressformidable());
app.use("/olympia", events);

app.all("*", (req, res) => {
  console.log("hello3");
  res.json({ message: "No such route" });
});

app.listen("3000", (req, res) => {
  console.log("Server has started");
});

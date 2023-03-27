const express = require("express");
const router = express.Router();
const Event = require("../models/Event.js");

async function getEventByName(req, res, next) {
  let inputEvent = req.fields;
  let storedEvent = await Event.findOne({
    name: inputEvent.name,
    date: inputEvent.date,
  });
  req.storedEvent = storedEvent;
  next();
}

router.post("/create", getEventByName, async (req, res) => {
  let storedEvent = req.storedEvent;
  let newEvent = req.fields;

  if (!storedEvent) {
    let event = new Event(newEvent);
    await event.save();
    res.status(200).json(event);
  } else {
    res.status(400).json({ error: "The event already exists" });
  }
});

module.exports = router;

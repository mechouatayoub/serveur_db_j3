const mongoose = require("mongoose");
const connection = mongoose.createConnection(
  "mongodb://localhost:27017/olympia"
);

const EventSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
  },
  date: {
    type: mongoose.Schema.Types.Date,
  },
  seats: {
    orchestre: {
      type: mongoose.Schema.Types.Number,
    },
    mezzanine: {
      type: mongoose.Schema.Types.Number,
    },
  },
});

const EventModel = connection.model("Event", EventSchema);

module.exports = EventModel;

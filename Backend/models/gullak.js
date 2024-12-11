const mongoose = require("mongoose");

let gullakschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  total_amt: {
    type: Number,
    required: true,
  },
  current_amt: {
    type: Number,
    required: true,
    default: 0,
  }
});

module.exports = mongoose.model("gullak", gullakschema);
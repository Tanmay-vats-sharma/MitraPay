const mongoose = require("mongoose");
const user = require("./user");

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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
},
  { 
    toJSON: { 
    transform: (doc, ret) => {
      delete ret._id; 
      delete ret.__v; 
      delete ret.user;
      return ret;
    },
  } 
});

module.exports = mongoose.model("gullak", gullakschema);
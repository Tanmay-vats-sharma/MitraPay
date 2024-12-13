const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
  ],
  updatedAt: { type: Date, default: Date.now },
},
{
  toJSON: { 
    transform: (doc, ret) => {
      ret.contactId = ret._id;
      delete ret._id;
      delete ret.__v; 
      return ret;
    },
  } 
}
);

module.exports = mongoose.model("contact", contactSchema);

const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    content: { type: String, required: true },
  },
  { 
    timestamps: true, 
    toJSON: { 
      transform: (doc, ret) => {
        delete ret._id; 
        delete ret.__v; 
        return ret;
      },
    },
  },
);

module.exports = mongoose.model("Message", MessageSchema);

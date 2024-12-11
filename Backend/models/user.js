const mongoose = require("mongoose");
require("dotenv").config(); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


let userschma = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profile_pic:{
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
    },
    Phone_no: {
      type: String,
      required: true,
    },
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallet",
      required: true,
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contact",
        unique: true,
      },
    ],
    gullak: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "gullak",
        unique: true,
      },
    ],
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transaction",
        unique:true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userschma);

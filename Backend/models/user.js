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
      unique: true,
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
      },
    ],
    gullak: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "gullak",
      },
    ],
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transaction",
      },
    ],
  },
  { 
    timestamps: true,
    toJSON: { 
      transform: (doc, ret) => {
        delete ret._id; 
        delete ret.__v; 
        delete ret.password;
        delete ret.wallet;
        delete ret.contacts;
        delete ret.gullak;
        delete ret.transactions;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("user", userschma);

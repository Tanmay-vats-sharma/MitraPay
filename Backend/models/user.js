const mongoose = require("mongoose");
require("dotenv").config(); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


let userschma = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/ 
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("user", userschma);

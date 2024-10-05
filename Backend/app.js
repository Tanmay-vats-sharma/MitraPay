const express = require("express");
const app = express();
require("dotenv").config();
const cookieparser = require("cookie-parser");
const cors = require('cors');

const corsOptions = {
    origin: process.env.FRONTEND_DOMAIN, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };
  
  app.use(cors(corsOptions));
  



app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const loginRoute = require("./routes/LoginRoute")

app.use("/api/auth", loginRoute)





app.listen(3000);

const express = require("express");
const app = express();
require("dotenv").config();
const cookieparser = require("cookie-parser");



app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const loginRoute = require("./routes/LoginRoute")

app.use("/api/auth", loginRoute)





app.listen(3000);

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

// Define a request logger middleware
const requestLogger = (req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Route: ${req.originalUrl}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    next();
};

// Use the request logger middleware
app.use(requestLogger);

const loginRoute = require("./routes/LoginRoute");
const gullakRoute = require("./routes/GullakRoute");
app.use("/api/gullak", gullakRoute);

app.use("/api/auth", loginRoute);
app.get("/", (req, res) => {
    res.send(`server is running on ${PORT}`)
})

// Global Error-Handling Middleware
const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(err.statusCode || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            stack: process.env.NODE_ENV === 'production' ? ' ' : err.stack,
        },
    });
};

// Use the error-handling middleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
});

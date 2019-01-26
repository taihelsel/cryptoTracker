//imports
require('dotenv').config();
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 5000;

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
//server logging
app.use(require("morgan")("dev"));
//routes
app.use("/test", require("./routes/test"));
//sending build
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});
//setting port & starting server
const server = app.listen(process.env.PORT || port, () => {
    console.log("Server started on port", process.env.PORT || port);
});
module.exports = server;
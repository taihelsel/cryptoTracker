const express = require("express"),
router = express.Router(),
mongoose = require("mongoose"),
User = require(".././models/User"),
jwt = require("jsonwebtoken");

//POST
router.post("/login", (req, res) => {
    
});
router.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordConf = req.body.passwordConf;
    console.log("username",username,"password",password,"passwordConf",passwordConf);
    res.status(200).send();
});
module.exports = router;
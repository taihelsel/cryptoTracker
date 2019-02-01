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
    if (password !== passwordConf) res.status(400).send({ message: "Error passwords do not match" });
    else {
        let newUser = new User({ username });
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function (err, user) {
            if (err) res.status(400).send({ message: err });
            else {
                delete user.password;
                console.log(user);
                res.json(user);
            }
        });
    }
});
module.exports = router;
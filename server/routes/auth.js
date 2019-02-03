require('dotenv').config();
const express = require("express"),
    router = express.Router(),
    authHelpers = require(".././helperFuncs/authHelpers.js"),
    jwtHelpers = require(".././helperFuncs/jwtHelpers.js");

//POST
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    authHelpers.loginUser(username, password, (loginResp) => {
        if (loginResp !== true) res.status(400).send(loginResp); //invalid login sends err message to front end
        else {
            //valid login
            const token = jwtHelpers.signToken({ username, password }, process.env.JWT_KEY);
            if (token) res.json({ token });
            else res.status(400).send({ message: "Error validating credentials", errorCode: 3 });
        }
    });
});
router.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordConf = req.body.passwordConf;
    if (password !== passwordConf) res.status(400).send({ message: "Error passwords do not match" });
    else {
        authHelpers.createUser(username, password, function (err, user) {
            if (err) res.status(400).send({ message: err });
            else {
                const token = jwtHelpers.signToken({ username, password }, process.env.JWT_KEY);
                user.password = undefined;
                res.json({ user, token });
            }
        });
    }
});
router.post("/validate", jwtHelpers.checkForToken, (req, res) => {
    const token = req.token;
    const unencrypted = jwtHelpers.validateToken(token, process.env.JWT_KEY);
    if (unencrypted !== false) {
        unencrypted.password = undefined;
        res.json({ isValidToken: true, username: unencrypted.username });
    } else res.json({ isValidToken: false });
});
module.exports = router;
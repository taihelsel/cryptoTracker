const mongoose = require("mongoose"),
    User = require(".././models/User");

exports.createUser = function (username, password, cb) {
    let newUser = new User({ username });
    newUser.password = newUser.encryptPassword(password);
    newUser.save(cb);
}
exports.loginUser = function (username, password, cb) {
    User.findOne({
        username: username
    }, function (err, user) {
        switch(true){
            case err:
            case err === null && user === null:
                cb({ message: "Error invalid login credentials" })
            break;
            case user && user.isValidPassword(password):
                cb(true);
            break;
            default:
                cb({ message: "Error logging user in" })
            break;
        }
    })
}
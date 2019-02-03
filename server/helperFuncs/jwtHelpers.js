const jwt = require("jsonwebtoken");
exports.checkForToken = function (req, res, next) {
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.status(403).send({
            message: "Error invalid credentials",
            errorCode: 1,
        });
    }
}
exports.validateToken = function (token, key) {
    return jwt.verify(token, key,(err,Auth)=>err?false:Auth);
}
exports.signToken = function (params, key) {
    return jwt.sign(params, key);
}
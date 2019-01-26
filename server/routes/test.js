const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("test route hit");
    res.json({test:"test route hit"});
});

module.exports = router;
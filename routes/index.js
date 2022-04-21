const express = require("express");
const path = require("path");
const router = express.Router();
router
    .route("/")
    .get((req, res,) => res.render(path.resolve("views/index.ejs")))
    .post((req, res) => res.render("main"))
module.exports = router;
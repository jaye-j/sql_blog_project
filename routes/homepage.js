const express = require("express");
const router = express.Router();
let db = require("../models/database");

router.get("/", (req, res) => {
  db.query("SELECT * FROM blogs").then(results => {
    //results is an array of objects
    res.render("homepage", {
      blogs: results
    });
  });
});

module.exports = router;

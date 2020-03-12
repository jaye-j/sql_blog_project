const express = require("express");
const router = express.Router();
let db = require("../models/database");

router.get("/", (req, res) => {
  let blogs = "";
  let auths = "";
  db.query("SELECT * FROM blogs")
    .then(results => {
      blogs = results;
      db.query("SELECT * FROM authors").then(results2 => {
        auths = results2;
        res.render("homepage", {
          authors: auths,
          blogs: blogs
        });
      });
    })
    .catch(error => {
      console.log(error);
      res.send("error.");
    });
});

module.exports = router;

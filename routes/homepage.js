const express = require("express");
const router = express.Router();
let db = require("../models/database");

router.get("/", (req, res) => {
  let blogs = "";
  let auths = "";
  let cats = "";
  db.query("SELECT * FROM blogs")
    .then(results => {
      blogs = results;
      db.query("SELECT * FROM authors").then(results2 => {
        auths = results2;
        db.query("SELECT * FROM categories").then(results3 => {
          cats = results3;
        res.render("homepage", {
          authors: auths,
          blogs: blogs,
          categories: cats
          });
        });
      });
    })
    .catch(error => {
      console.log(error);
      res.send("error.");
    });
});

module.exports = router;

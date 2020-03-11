const express = require("express");
const router = express.Router();
let bodyParser = require("body-parser");
let db = require("../models/database");

router.get("/editblogs", (req, res) => {
  let cats = "";
  let auths = "";
  db.query("SELECT * FROM categories").then(results => {
    cats = results;
    db.query("SELECT * FROM authors").then(results2 => {
      auths = results2;
      res.render("editblog", {
        authors: auths,
        categories: cats
      });
    });
  });
});

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/editblogs", (req, res) => {
  let title = req.body.title;
  let author_id = req.body.author_id;
  let category_id = parseInt(req.body.category_id);
  let body = req.body.body;
  let date_pub = req.body.date_pub;
  db.none(
    "INSERT INTO blogs (title, author_id, category_id, body, date_pub) VALUES ($1, $2, $3, $4, $5)",
    [title, author_id, category_id, body, date_pub]
  )
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;

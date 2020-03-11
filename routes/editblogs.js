const express = require("express");
const router = express.Router();
let bodyParser = require("body-parser");
let db = require("../models/database");

router.get("/editblogs", (req, res) => {
  db.query("SELECT * FROM categories", (err, cats) => {
    if (err) {
      console.log(err);
    }
    db.query("SELECT * FROM authors", (err, auths) => {
      if (err) {
        console.log(err);
      }
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
  let date_pub = req.body.date;
  db.none(
    "INSERT INTO restaurants (title, author_id, category_id, body, date_pub) VALUES ($1, $2, $3, $4, $5, $6)",
    [title, author_id, category_id, body, date_pub]
  )
    .then(() => {
      res.redirect("/blogs");
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;

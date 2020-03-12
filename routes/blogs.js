const express = require("express");
const router = express.Router();
let db = require("../models/database");

router.get("/blogs/:id", (req, res) => {
  let blog_id = req.params.id;
  db.query(
    "SELECT * FROM blogs INNER JOIN authors ON blogs.author_id = authors.id WHERE blogs.id=$1",
    [blog_id]
  )
    .then(results => {
      //results is an array of objects
      res.render("blogs", {
        blog: results
      });
    })
    .catch(error => {
      console.log(error);
      res.send("error.");
    });
});

module.exports = router;

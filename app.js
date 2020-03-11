const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

//wire up controllers to take page requests and render pages.
app.use(require("./routes/blogs"));
app.use(require("./routes/editblogs"));
app.use(require("./routes/homepage"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});

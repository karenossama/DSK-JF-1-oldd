const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.set(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", require("./routes/home"));
app.use("/admin", require("./routes/admin"));

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(process.env.PORT || 3001);


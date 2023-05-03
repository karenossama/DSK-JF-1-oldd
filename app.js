const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", require("./routes/home"));
app.use("/signup", require("./routes/signUp"));

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port);

// mongoose
//   .connect(
//     "mongodb+srv://farid:farid@learnjs.wuejl3c.mongodb.net/users?retryWrites=true&w=majority"
//   )
//   .then((result) => {
//     app.listen(port, () => {
//       console.log(
//         `Example app listening on -> http://localhost:${port}  & connect to the DataBase`
//       );
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

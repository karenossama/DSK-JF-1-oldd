const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("signup");
});

router.post("/post", (req, res) => {
  const newUser = new User(req.body);
  let found = false;

  User.find()
    .then((result) => {
      for (x in result) {
        if(result[x].username == req.body.username){
          found = true;
          break;
        }
      }
    })
    .then(() => {
      if (!found) {
        newUser
          .save()
          .then((result) => {
            res.redirect("/signup");
            console.log("done");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("User name is taken");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

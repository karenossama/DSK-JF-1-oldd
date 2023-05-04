const express = require("express");
const router = express.Router();
const {
  home,
  about,
  courses,
  courseInner,
  contact,
} = require("../controllers/home");

router.get("/", home);
router.get("/about", about);
router.get("/courses", courses);
router.get("/course-inner", courseInner);
router.get("/contact", contact);

module.exports = router;

const express = require("express");
const router = express.Router();
const { home, about ,contact } = require("../controllers/home");

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);

module.exports = router;

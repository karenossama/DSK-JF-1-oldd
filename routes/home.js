const express = require("express");
const router = express.Router();
const { home, about } = require("../controllers/home");

router.get("/", home);
router.get("/about", about);

module.exports = router;

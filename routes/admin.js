const express = require("express");
const router = express.Router();
const { adminDashboard } = require("../controllers/adminDashboard");

router.get("/", adminDashboard);

module.exports = router;

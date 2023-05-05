const express = require("express");
const router = express.Router();
const {
  adminDashboard,
  addStudent,
  banStudent,
  editStudent,
  searchBan,
  searchEdit
} = require("../controllers/adminDashboard");

router.get("/", adminDashboard);
router.get("/student/add", addStudent);
router.get("/student/ban", banStudent);
router.get("/student/edit", editStudent);
router.get("/student/search-ban", searchBan);
router.get("/student/search-edit", searchEdit);

module.exports = router;

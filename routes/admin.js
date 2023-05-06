const express = require("express");
const router = express.Router();
const {
  adminDashboard,
  addStudent,
  banStudent,
  editStudent,
  searchBan,
  searchEdit,
  addCourse,
  banCourse,
  editCourse,
  searchBanCourse,
  searchEditCourse
} = require("../controllers/adminDashboard");

router.get("/", adminDashboard);
router.get("/student/add", addStudent);
router.get("/student/ban", banStudent);
router.get("/student/edit", editStudent);
router.get("/student/search-ban", searchBan);
router.get("/student/search-edit", searchEdit);

router.get("/Add-course", addCourse);
router.get("/ban-courses", banCourse);
router.get("/edite-courses", editCourse);
router.get("/search-ban-courses", searchBanCourse);
router.get("/search-edite-courses", searchEditCourse);

module.exports = router;

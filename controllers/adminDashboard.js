const adminDashboard = (req, res) => {
  res.render("admin/Dashboard");
};
const addStudent = (req, res) => {
  res.render("admin/Add-Student");
};
const banStudent = (req, res) => {
  res.render("admin/Ban-Student");
};
const editStudent = (req, res) => {
  console.log("xx");
  res.render("admin/Edit-Student");
};
const searchBan = (req, res) => {
  res.render("admin/Search-Ban");
};
const searchEdit = (req, res) => {
  res.render("admin/Search-Edit");
};

const addCourse = (req, res) => {
  res.render("admin/Add-courses");
};
const banCourse = (req, res) => {
  res.render("admin/Ban-course");
};
const editCourse = (req, res) => {
  res.render("admin/Edit-course");
};
const searchBanCourse = (req, res) => {
  res.render("admin/searchremovec");
};
const searchEditCourse = (req, res) => {
  res.render("admin/searcheditc");
};

const addExam = (req, res) => {
  res.render("admin/Add-Exams");
};
const banExam = (req, res) => {
  res.render("admin/Ban-Exam");
};
const editExam = (req, res) => {
  res.render("admin/Edit-Exam");
};
const searchBanExam = (req, res) => {
  res.render("admin/searchremoveE");
};
const searchEditExam = (req, res) => {
  res.render("admin/searcheditE");
};

module.exports = {
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
  searchEditCourse,
  addExam,
  banExam,
  editExam,
  searchBanExam,
  searchEditExam,
};

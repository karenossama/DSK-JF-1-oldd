const adminDashboard = (req, res) => {
  res.render("admin/Dashboard");
};
const addStudent = (req, res) => {
  res.render("admin/student/Add-Student");
};
const banStudent = (req, res) => {
  res.render("admin/student/Ban-Student");
};
const editStudent = (req, res) => {
  res.render("admin/student/Edit-Student");
};
const searchBan = (req, res) => {
  res.render("admin/student/Search-Ban");
};
const searchEdit = (req, res) => {
  res.render("admin/student/Search-Edit");
};

module.exports = {
  adminDashboard,
  addStudent,
  banStudent,
  editStudent,
  searchBan,
  searchEdit,
};

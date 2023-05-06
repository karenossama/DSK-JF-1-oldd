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
  console.log('xx')
  res.render("admin/Edit-Student");
};
const searchBan = (req, res) => {
  res.render("admin/Search-Ban");
};
const searchEdit = (req, res) => {
  res.render("admin/Search-Edit");
};

module.exports = {
  adminDashboard,
  addStudent,
  banStudent,
  editStudent,
  searchBan,
  searchEdit,
};

const getProfile = (req, res) => {
  return res.render("profile/profile");
};
module.exports.getProfile = getProfile;

const getProfileRegister = (req, res) => {
  return res.render("profile/profileRegister");
};
module.exports.getProfileRegister = getProfileRegister;

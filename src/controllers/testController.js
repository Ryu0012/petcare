const getLogin = (req, res) => {
  return res.render("about");
};
module.exports.getLogin = getLogin;

const getAfterLogin = (req, res) => {
  return res.render("index");
};
module.exports.getAfterLogin = getAfterLogin;

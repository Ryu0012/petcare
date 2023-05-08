//첫 시작 페이지
const start = (req, res) => {
  res.render("login/start");
};
module.exports.start = start;

//로그인 페이지
const getLogin = (req, res) => {
  res.render("login/login");
};
module.exports.getLogin = getLogin;

//로그인 이후 유저 페이지  [넷플릭스 같이 동그라미 땅땅땅]
const getUser = (req, res) => {
  res.render("login/users");
};
module.exports.getUser = getUser;

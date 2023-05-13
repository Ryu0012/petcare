const getHomeBefore = (req, res) => {
  return res.render("home/home_after");
};
module.exports.getHomeBefore = getHomeBefore;

const getHomeAfter = (req, res) => {
  return res.render("home/home_before");
};
module.exports.getHomeAfter = getHomeAfter;

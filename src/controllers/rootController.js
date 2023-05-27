export const home = (req, res) => {
  return res.render("root/index", { pageTitle: "Pet Care" });
};

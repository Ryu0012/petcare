export const home = (req, res) => {
  return res.render("root/index", { pageTitle: "Pet Care" });
};

export const edit = (req, res) => res.render("root/edit");

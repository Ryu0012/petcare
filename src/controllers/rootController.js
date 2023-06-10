import Pet from "../models/Pet";

export const home = async (req, res) => {
  if (req.session.loggedIn) {
    const { _id } = req.session.user;
    const pets = await Pet.find({ userId: _id });
    if (pets[0] == null) {
      return res.render("root/index1", { pageTitle: "Pet Care" });
    }
    console.log(pets);
    return res.render("root/index2", { pageTitle: "Pet Care", pets });
  } else {
    return res.render("root/index", { pageTitle: "Pet Care" });
  }
};

export const getChoiceProfile = (req, res) => {
  return res.render("root/choiceProfile");
};

export const postChoiceProfile = (req, res) => {
  return res.redirect("/");
};
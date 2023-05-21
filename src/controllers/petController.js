import Pet from "../models/Pet";

export const view = async (req, res) => {
  const pets = await Pet.find({});
  return res.render("pet/view", { pageTitle: "View", pets });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  if (!pet) {
    return res.status(404).render("404", { pageTitle: "Pet not found." });
  }
  return res.render("pet/edit", { pet });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { name, age, birth, type, type_details, introduce } = req.body;
  const pet = await Pet.exists({ _id: id });
  if (!pet) {
    return res.status(404).render("404", { pageTitle: "Pet not found." });
  }
  await Pet.findByIdAndUpdate(id, {
    name,
    age,
    birth,
    type: {
      value: type,
      details: type_details,
    },
    introduce: Pet.formatIntroduce(introduce),
  });
  return res.redirect(`/pet`);
};

export const getUpload = (req, res) =>
  res.render("pet/upload", { pageTitle: "Upload Pet", errorMessage: "" });

export const postUpload = async (req, res) => {
  const { name, age, birth, type, type_details, introduce } = req.body;
  try {
    await Pet.create({
      name,
      age,
      birth,
      type: {
        value: type,
        details: type_details,
      },
      introduce: Pet.formatIntroduce(introduce),
    });
    console.log(introduce);
    return res.redirect("/pet");
  } catch (error) {
    return res.render("pet/upload", {
      pageTitle: "Upload Pet",
      errorMessage: error._message,
    });
  }
};

export const deletePet = async (req, res) => {
  const { id } = req.params;
  await Pet.findByIdAndDelete(id);
  return res.redirect(`/pet`);
};

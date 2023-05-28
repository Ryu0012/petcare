import Pet from "../models/Pet";

export const view = async (req, res) => {
  const { _id } = req.session.user;
  const pets = await Pet.find({ userId: _id });
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
  const {
    params: { id },
    body: { name, age, birth, type, type_details, introduce },
    file,
  } = req;
  const pet = await Pet.findById({ _id: id });
  if (!pet) {
    return res.status(404).render("404", { pageTitle: "Pet not found." });
  }
  let avatarUrl = pet.avatarUrl;
  if (file && file.path) {
    avatarUrl = file.path;
  }

  await Pet.findByIdAndUpdate(
    id,
    {
      avatarUrl,
      name,
      age,
      birth,
      type: {
        value: type,
        details: type_details,
      },
      introduce: Pet.formatIntroduce(introduce),
    },
    { new: true }
  );

  return res.redirect(`/pet`);
};

export const getUpload = (req, res) =>
  res.render("pet/upload", { pageTitle: "Upload Pet", errorMessage: "" });

export const postUpload = async (req, res) => {
  const {
    body: { name, age, birth, type, type_details, introduce },
    session: {
      user: { _id },
    },
    file,
  } = req;

  let avatarUrl = "../image/basePetImg.jpg";
  if (file && file.path) {
    avatarUrl = file.path;
  }

  try {
    await Pet.create({
      avatarUrl,
      userId: _id,
      name,
      age,
      birth,
      type: {
        value: type,
        details: type_details,
      },
      introduce: Pet.formatIntroduce(introduce),
    });
    console.log(avatarUrl);
    return res.redirect("/pet");
  } catch (error) {
    console.log(error._message);
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

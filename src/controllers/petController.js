let pets = [
  {
    id: 1,
    name: "pug",
    age: 5,
    birth: "2018-01-01",
    type: "dog",
    type_details: "pug",
  },
  {
    id: 2,
    name: "kitty",
    age: 5,
    birth: "2018-01-01",
    type: "cat",
    type_details: "cheeto",
  },
];

export const detail = (req, res) => {
  return res.render("pet/petDetail", { pets });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const pet = pets[id - 1];
  return res.render("pet/petEdit", { pet });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { name, age, birth, type, type_details } = req.body;
  const pet = pets[id - 1];
  pet.name = name;
  pet.age = age;
  pet.birth = birth;
  pet.type = type;
  pet.type_details = pet.type_details;
  return res.redirect(`/pet`);
};

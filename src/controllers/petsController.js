// 반려동물 목록 조회
const getPets = (req, res) => {
  // res.send("반려동물 목록 페이지");
  // console.log("반려동물 목록 페이지 이동");
  return res.render("petcare/petcareList");
};
module.exports.getPets = getPets;

// 반려동물 등록(추가) 페이지 조회
const getNewPetForm = (req, res) => {
  // res.send("반려동물 등록 페이지");
  console.log("반려동물 등록 페이지");
  return res.render("petcare/petcareCreate");
};
module.exports.getNewPetForm = getNewPetForm;

// 반려동물 등록 요청 처리
const createPet = (req, res) => {
  // 반려동물 등록 로직 처리
  res.send("반려동물 등록 완료");
};
module.exports.createPet = createPet;

// 반려동물 상세 페이지 조회
const getPetDetail = (req, res) => {
  const petId = req.params.id;
  // res.send(`반려동물 상세 페이지 (${petId})`);
  // console.log("반려 동물 상세 페이지 Home에서 이동");
  return res.render("petcare/petcareDetail");
};
module.exports.getPetDetail = getPetDetail;

// 반려동물 수정 페이지 조회
const getEditPetForm = (req, res) => {
  const petId = req.params.id;
  // res.send(`반려동물 수정 페이지 (${petId})`);
  console.log("반려동물 수정 페이지");
  return res.render("petcare/petcareUpdate");
};
module.exports.getEditPetForm = getEditPetForm;

// 반려동물 수정 요청 처리
const updatePet = (req, res) => {
  const petId = req.params.id;
  // 반려동물 수정 로직 처리
  res.send(`반려동물 수정 완료 (${petId})`);
};
module.exports.updatePet = updatePet;

// 반려동물 삭제 요청 처리
const deletePet = (req, res) => {
  const petId = req.params.id;
  // 반려동물 삭제 로직 처리
  res.send(`반려동물 삭제 완료 (${petId})`);
};
module.exports.deletePet = deletePet;

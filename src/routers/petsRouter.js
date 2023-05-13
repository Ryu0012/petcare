const express = require("express");
const petsRouter = express.Router();
const petsController = require("../controllers/petsController");

// 반려동물 목록 조회 [수정(페이지 이동), 추가 , 삭제o]
petsRouter.get("/", petsController.getPets);

// 반려동물 등록(추가) 페이지 조회
petsRouter.get("/new", petsController.getNewPetForm);

// 반려동물 등록 요청 처리
petsRouter.post("/", petsController.createPet);

// 반려동물 상세 페이지 조회 [홈 메뉴에서 조회 가능]
petsRouter.get("/:id", petsController.getPetDetail);

// 반려동물 수정 페이지 조회
petsRouter.get("/:id/edit", petsController.getEditPetForm);

// 반려동물 수정 요청 처리
petsRouter.put("/:id", petsController.updatePet);

// 반려동물 삭제 요청 처리
petsRouter.delete("/:id", petsController.deletePet);

module.exports = petsRouter;

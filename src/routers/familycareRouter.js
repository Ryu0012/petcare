const express = require("express");
const familycareRouter = express.Router();
const familycareController = require("../controllers/familycareController");

//가족 소통 페이지
familycareRouter.get("/", familycareController.getFamilycare);

//달력 내용 추가를 위한 페이지
familycareRouter.get("/add", familycareController.addFamilycare);

module.exports = familycareRouter;

const express = require("express");
const petsDetailRouter = express.Router();
const petsDetailController = require("../controllers/petsDetailController");

//반려동물 상세 내용 페이지 라우터
petsDetailRouter.get("/", petsDetailController.getPetsDetail);

module.exports = petsDetailRouter;

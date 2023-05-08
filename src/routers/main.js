const express = require("express");
const testRouter = express.Router();
const testController = require("../controllers/testController");

// 로그인 페이지 조회
testRouter.get("/", testController.getLogin);

// 로그인 페이지 이후 조회
testRouter.get("/after", testController.getAfterLogin);

module.exports = testRouter;

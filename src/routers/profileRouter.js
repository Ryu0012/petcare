const express = require("express");
const profileRouter = express.Router();
const profileController = require("../controllers/profileController");

//프로필 페이지
profileRouter.get("/", profileController.getProfile);

//프로필 등록 페이지
profileRouter.get("/register", profileController.getProfileRegister);

module.exports = profileRouter;

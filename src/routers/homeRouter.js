const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/homeController");

//로그인 이전 페이지
homeRouter.get("/", homeController.getHomeBefore);

//로그인 이후 페이지
homeRouter.get("/after", homeController.getHomeAfter);

module.exports = homeRouter;

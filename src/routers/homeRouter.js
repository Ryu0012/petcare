const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/homeController");

//메인 페이지 v1
homeRouter.get("/", homeController.getHome1);

//메인 페이지 v2
homeRouter.get("/2", homeController.getHome2);

module.exports = homeRouter;

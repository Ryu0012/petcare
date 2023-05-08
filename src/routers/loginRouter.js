const express = require("express");
const loginRouter = express.Router();
const loginController = require("../controllers/loginController");

//첫 시작
loginRouter.get("/", loginController.start);

//로그인 페이지
loginRouter.get("/login", loginController.getLogin);

//로그인 이후 유저 페이지
loginRouter.get("/users", loginController.getUser);

module.exports = loginRouter;

const express = require("express");
const loginRouter = express.Router();
const loginController = require("../controllers/loginController");

//로그인 페이지 [ /login ]
loginRouter.get("/", loginController.getLogin);

//회원 가입 페이지 [ /login/user ]
loginRouter.get("/register", loginController.getRegister);

module.exports = loginRouter;

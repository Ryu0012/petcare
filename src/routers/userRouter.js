import express from "express";
import {
  getEdit,
  postEdit,
  getLogin,
  postLogin,
  getJoin,
  postJoin,
  logout,
  getChangePassword,
  postChangePassword,
  profile,
  deleteUser,
} from "../controllers/userController";
import {
  protectorMiddleware,
  publicOnlyMiddleware,
  userUploadImg,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/profile", protectorMiddleware, profile);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(userUploadImg.single("avatar"), postEdit);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter
  .route("/join")
  .get(getJoin)
  .post(userUploadImg.single("avatar"), postJoin);
userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/changePassword")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.route("/remove").get(protectorMiddleware, deleteUser);

export default userRouter;

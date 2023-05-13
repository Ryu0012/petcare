import express from "express";
import { choice, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/choice", choice);
userRouter.get("/edit", edit);

export default userRouter;

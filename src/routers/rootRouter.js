import express from "express";
import { home, login, edit } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/login", login);
rootRouter.get("/edit", edit);

export default rootRouter;

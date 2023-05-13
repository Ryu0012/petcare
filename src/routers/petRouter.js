import express from "express";
import { detail, edit } from "../controllers/petController";

const petRouter = express.Router();

petRouter.get("/detail", detail);
petRouter.get("/edit", edit);

export default petRouter;

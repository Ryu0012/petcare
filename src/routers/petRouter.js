import express from "express";
import { detail, getEdit, postEdit } from "../controllers/petController";

const petRouter = express.Router();

petRouter.get("/", detail);
petRouter.route("/edit/:id(\\d+)").get(getEdit).post(postEdit);

export default petRouter;

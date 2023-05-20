import express from "express";
import {
  view,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deletePet,
} from "../controllers/petController";

const petRouter = express.Router();

petRouter.get("/", view);
petRouter.route("/upload").get(getUpload).post(postUpload);
petRouter.route("/remove/:id([0-91-f]{24})").get(deletePet);
petRouter.route("/edit/:id([0-91-f]{24})").get(getEdit).post(postEdit);

export default petRouter;

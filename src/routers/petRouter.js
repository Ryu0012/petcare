import express from "express";
import {
  view,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deletePet,
} from "../controllers/petController";
import {
  protectorMiddleware,
  publicOnlyMiddleware,
  petUploadImg,
} from "../middlewares";

const petRouter = express.Router();

petRouter.get("/", protectorMiddleware, view);
petRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(petUploadImg.single("avatar"), postUpload);
petRouter
  .route("/remove/:id([0-91-f]{24})")
  .get(protectorMiddleware, deletePet);
petRouter
  .route("/edit/:id([0-91-f]{24})")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(petUploadImg.single("avatar"), postEdit);

export default petRouter;

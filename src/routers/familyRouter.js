import {
  getNewFamily,
  postNew,
  postEnter,
} from "../controllers/familycareController";
import { familyInCheckMiddleware, protectorMiddleware } from "../middlewares";

const express = require("express");
const bodyParser = require("body-parser");
const familycareController = require("../controllers/familycareController");

const familycareRouter = express.Router();

// body-parser 미들웨어를 사용하여 요청 본문(body)을 파싱합니다.
familycareRouter.use(bodyParser.urlencoded({ extended: true }));

// JSON 형식의 요청 본문을 파싱합니다
familycareRouter.use(bodyParser.json());

// 가족 소통 페이지 라우트
familycareRouter.get("/", familycareController.getFamilycare);

// 달력 내용 추가를 위한 페이지 라우트
familycareRouter.post("/add", familycareController.addFamilycare);

//달력 삭제를 위한 라우트
familycareRouter.delete("/delete", familycareController.deleteFamilycare);

//달력 수정 위한 라우트
familycareRouter.put("/update", familycareController.updateFamilycare);

module.exports = familycareRouter;

familycareRouter
  .route("/newFamily")
  .get(protectorMiddleware, familyInCheckMiddleware, getNewFamily);
familycareRouter
  .route("/new")
  .post(protectorMiddleware, familyInCheckMiddleware, postNew);
familycareRouter
  .route("/enter")
  .post(protectorMiddleware, familyInCheckMiddleware, postEnter);

export default familycareRouter;

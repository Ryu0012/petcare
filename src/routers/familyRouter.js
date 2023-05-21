import express from "express";

const familyRouter = express.Router();

import { getFamilycare } from "../controllers/familycareController";

// 임의로 해뒀습니다. 컨트롤러 연결해서 작업하시면 됩니다.
// const handleFamily = (req, res) => res.send("calendar");

// http://localhost:5000/family
familyRouter.get("/", getFamilycare);

export default familyRouter;

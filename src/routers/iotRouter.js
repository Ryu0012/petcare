const express = require("express");
const iotRouter = express.Router();
const iotController = require("../controllers/iotController");

//iot 관리 페이지
iotRouter.get("/", iotController.getIot);

module.exports = iotRouter;

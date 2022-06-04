//imports
const express = require("express");
const router = express.Router();
const report_controller = require("../controllers/report_controller");

//routes
router.post("/", report_controller.createReport);
router.get("/", report_controller.getReport);

//exports
module.exports = router;

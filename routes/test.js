//imports
const express = require("express");
const router = express.Router();
const test = require("../controllers/test_controller");

//test route
router.get("/1", test.test1);
router.get("/2", test.test2);
router.get("/3", test.test3);
router.get("/4", test.test4);

//exports
module.exports = router;

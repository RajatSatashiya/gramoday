//imports
const express = require("express");
const router = express.Router();
const test = require("../controllers/test_controller");

//test route
router.get("/1", test.test1);
router.get("/2", test.test2);
router.get("/3", test.test3);
router.get("/4", test.test4);
router.get("/5", test.test5);

//exports
module.exports = router;

/* testing description

"/1" -> create report for user-1 (as given in question)
copy the reportID from response and paste it in the env file for "/4" route.

"/2" -> create report for user-2 (as given in question)
"/3" -> create report with same details as user-1 (gives error);

"/4" -> get aggregate report 
here we take the reportID, and then take the marketID and cmdtyID 
for the response.
We then perform and generate aggregate report on the basis of marketID-cmdtyID

"/5" -> failure message for incorrect ID

*/

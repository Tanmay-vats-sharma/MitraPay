const express = require("express");
const router = express.Router();
const GullakController = require("../controllers/gullakcontroller");
const {isloggedin} = require('../middlewares/auth');

router.get("/", isloggedin, GullakController.getGullaks);
router.post("/create", isloggedin, GullakController.createGullak);
router.delete("/:gullakName",isloggedin, GullakController.deleteGullak);
router.post("/addMoney",isloggedin, GullakController.addMoney);

module.exports = router;

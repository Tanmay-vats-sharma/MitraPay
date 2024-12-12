const express = require("express");
const router = express.Router();
const GullakController = require("../controllers/gullakcontroller");

router.post("/gullak/create", GullakController.createGullak);
router.delete("/gullak/:userId/:gullakId", GullakController.deleteGullak);

module.exports = router;

const router = require("express").Router();
const { isloggedin } = require("../middlewares/auth");
const { getUserDetails, getProfile } = require("../controllers/userController");

router.get("/profile", isloggedin, getProfile);
router.get("/:Phone_no", getUserDetails);
// Update User Details
// router.get("/viewTransactions", isloggedin, transactionController.viewTransactions);

module.exports = router;
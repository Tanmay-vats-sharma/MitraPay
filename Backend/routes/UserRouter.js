const router = require("express").Router();
const { isloggedin } = require("../middlewares/auth");
const { getUserDetails, getProfile, updateProfile } = require("../controllers/userController");
const upload = require("../middlewares/Multer");

router.get("/profile", isloggedin, getProfile);
router.get("/:Phone_no", getUserDetails);
router.post("/update", isloggedin, upload.single("profileImage"), updateProfile);

module.exports = router;
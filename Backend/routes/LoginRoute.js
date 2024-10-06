const express = require("express");
const router = express.Router();
const {register, login, logout , refreshToken, googleLogin} = require("../controllers/authcontrollers");


router.post("/register", register);

router.post("/login", login);

router.post("/logout",logout);

router.post("/refresh-token", refreshToken);

router.post("/google",googleLogin);

module.exports = router;

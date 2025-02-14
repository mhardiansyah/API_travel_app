const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
// router.post("/reset-password", authController.resetPassword);

module.exports = router;
const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/login", authController.login);

module.exports = router;
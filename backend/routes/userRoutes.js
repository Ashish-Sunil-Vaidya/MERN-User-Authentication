const express = require("express");
const router = express.Router();
const {
  createAccount,
  loginUser,
  resetPassword,
} = require("../controllers/userControllers");

router.post("/signup", createAccount);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, allUser).post(registerUser);

router.route("/login").post(authUser);

module.exports = router;

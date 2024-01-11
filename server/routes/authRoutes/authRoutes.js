const { Router } = require("express");
const router = Router();
const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  logoutGet,
} = require("../../controller/authController");

router.post("/", signupPost);
router.get("/signup", signupGet);
router.get("/login", loginGet);
router.post("/login", loginPost);
router.get("/logout", logoutGet);

module.exports = router;

const { Router } = require("express");
const router = Router();
const { setCookies } = require("../../controller/cookies");

router.get("/set-cookies", setCookies);
router.get("/read-cookies", (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});

module.exports = router;

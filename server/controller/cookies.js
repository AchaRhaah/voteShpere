const { maxAge: MAXAGE } = require("../constants");

const setCookies = (req, res) => {
  res.cookie("newUser", false);
  res.cookie("isVoter", true, { maxAge: MAXAGE * 24, httpOnly: true });

  res.send("Cookies set");
};

module.exports = { setCookies };

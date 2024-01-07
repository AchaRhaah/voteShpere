const User = require("../models/User");
const { handleErrors, createToken } = require("../index");
const { maxAge: MAXAGE } = require("../constants");
const bycrypt = require("bcrypt");

//auth routes

const signupGet = (req, res) => {
  res.send("signup get");
};

const signupPost = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const user = await User.create({ email, password, username });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: MAXAGE * 1000 });
    res.status(201).json({ user: user._id, token });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json(errors);
  }
};

const loginGet = (req, res) => {
  res.send("login get");
};

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bycrypt.compare(password, user.password);
      if (auth) {
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: MAXAGE * 1000 });
        return res.status(200).json({ user: user._id, token });
      }
      throw Error("incorrect email or password");
    }
    throw Error("incorrect email or password");
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json(errors);
  }
};

const logoutGet = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
};

module.exports = { signupGet, signupPost, loginGet, loginPost, logoutGet };

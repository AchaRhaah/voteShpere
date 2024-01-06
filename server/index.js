const jwt = require("jsonwebtoken");
const { maxAge: MAXAGE } = require("./constants");

const handleErrors = (error) => {
  console.log(error);
  let err = { email: "", password: "", username: "" };

  // Handle validation errors
  if (error.name === "ValidationError" && error.errors) {
    Object.keys(error.errors).forEach((field) => {
      err[field] = error.errors[field].message;
    });
  }

  // Handle duplicate key error
  if (error.code === 11000 && error.keyValue) {
    const field = Object.keys(error.keyValue)[0];
    err[field] = `That ${field} already exists`;
  }

  // Handle generic errors with concatenated messages
  if (error.message && error.message.includes("user validation failed")) {
    const matches = error.message.match(/(\w+): ([^,]+)/g);
    if (matches) {
      matches.forEach((match) => {
        const [field, message] = match.split(": ");
        if (err[field] === "") {
          err[field] = message;
        }
      });
    }
  }
  // Handle generic "incorrect email or password" error
  if (error.message && error.message.includes("incorrect email or password")) {
    err.email = "Incorrect email or password";
  }
  return err;
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRETE, { expiresIn: MAXAGE });
};

module.exports = { handleErrors, createToken };

const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    lowercase: true,
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "please enter a username"],
    minlength: [3, "Minimum password length is 3 characters"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  involvedInElections: [
    {
      election: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Election",
      },
      hasVoted: {
        type: Boolean,
        default: false,
      },
      // Add more properties if needed
    },
  ],
});
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });


// fire a function after a doc has been saved

userSchema.post("save", function (doc, next) {
  console.log("new user was created and saved");
  next();
});

// fire a function before docc is saved

userSchema.pre("save", async function (next) {
  const salt = await bycrypt.genSalt();
  this.password = await bycrypt.hash(this.password, salt);
  next();
});

// // static method to login user
// userSchema.static.login = async function (email, password) {
//   const user = await this.findOne({ email });

// };

const User = mongoose.model("user", userSchema);
module.exports = User;

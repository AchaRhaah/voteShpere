// election Schema
const mongoose = require("mongoose");

const electionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  invitedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  isOpenToAll: { type: Boolean, default: false },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Candidate" }],
});

const Election = mongoose.model("Election", electionSchema);

module.exports = Election;

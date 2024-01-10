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
  description: {
    type: String,
    required: true,
  },
  isOpenToAll: { type: Boolean, default: false },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Candidate" }],
  link: {
    type: String,
  },
  results: [
    {
      candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
      voteCount: { type: Number, default: 0 },
    },
  ],
});

const Election = mongoose.model("Election", electionSchema);

module.exports = Election;

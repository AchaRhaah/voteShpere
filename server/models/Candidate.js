const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  election: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Election",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;

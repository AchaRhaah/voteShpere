const { Router } = require("express");
const router = Router();
const Vote = require("../../models/Vote");
const Election = require("../../models/Election");
const User = require("../../models/User");

router.post("/vote", async (req, res) => {
  try {
    const { candidateID, userID, electionID } = req.body;

    // Check if the election allows all users to vote
    const election = await Election.findById(electionID);

    if (!election) {
      return res.status(404).json({ error: "Election not found" });
    }

    if (!election.isOpenToAll) {
      // If the election is not open to all, check if the user is invited
      const isInvited = election.invitedUsers.includes(userID);

      if (!isInvited) {
        return res
          .status(403)
          .json({ error: "You are not authorized to vote in this election" });
      }
    }

    // Create a new vote record
    const vote = new Vote({
      user: userID,
      election: electionID,
      candidate: candidateID,
    });

    // Save the vote to the database
    await vote.save();

    // Update the user's involvedInElections array
    await User.findByIdAndUpdate(
      userID,
      {
        $addToSet: {
          involvedInElections: { hasVoted: true },
        },
      },
      { new: true }
    );

    // Check if the candidate already exists in the results array
    const candidateInResults = await Election.findOne({
      _id: electionID,
      "results.candidate": candidateID,
    });

    if (!candidateInResults) {
      // If not, add the candidate to the results array with a default voteCount of 0
      await Election.findByIdAndUpdate(electionID, {
        $addToSet: {
          results: { candidate: candidateID, voteCount: 0 },
        },
      });
    }

    // Increment the vote count for the candidate
    await Election.findOneAndUpdate(
      { _id: electionID, "results.candidate": candidateID },
      { $inc: { "results.$.voteCount": 1 } },
      { new: true }
    );

    res.status(200).json({ message: "Vote cast successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

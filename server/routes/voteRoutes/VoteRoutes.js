const { Router } = require("express");
const router = Router();
const Vote = require("../../models/Vote");
const Election = require("../../models/Election");

router.post("/vote", async (req, res) => {
  try {
    const { candidateID, userID, electionID } = req.body;

    // Create a new vote record
    const vote = new Vote({
      user: userID,
      election: electionID,
      candidate: candidateID,
    });

    // Save the vote to the database
    await vote.save();

    // Check if the candidate already exists in the results array
    const election = await Election.findOne({
      _id: electionID,
      "results.candidate": candidateID,
    });

    if (!election) {
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

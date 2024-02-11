const { Router } = require("express");
const router = Router();
const Vote = require("../../models/Vote");
const Election = require("../../models/Election");

router.post("/vote", async (req, res) => {
  try {
    const { candidateID, userID, electionID } = req.body;
    const vote = new Vote({
      user: userID,
      election: electionID,
      candidate: candidateID,
    });
    await vote.save();
    await Election.findByIdAndUpdate(
      electionID,
      {
        $inc: { "results.[elem].voteCount": 1 },
      },
      { arrayFilters: [{ "elem.candidate": candidateID }] }
    );
    res.status(200).json({ message: "Vote cast successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;

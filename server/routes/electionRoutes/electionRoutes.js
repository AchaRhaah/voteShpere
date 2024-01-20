const { Router } = require("express");
const router = Router();
// const nodemailer = require("nodemailer");
const Election = require("../../models/Election");
const User = require("../../models/User");

// Routes to create an election

router.post("/create-election", async (req, res) => {
  try {
    const {
      title,
      description,
      isOpenToAll,
      invitedUsers,
      candidates,
      startDate,
      endDate,
    } = req.body;

    if (!isOpenToAll && (!invitedUsers || invitedUsers.length === 0)) {
      return res
        .status(400)
        .json({ error: "Invited users must be invited for a closed election" });
    }

    // creating an election

    const election = await Election.create({
      title,
      creator: req.user_id,
      description,
      isOpenToAll,
      invitedUsers,
      candidates,
      startDate,
      endDate,
    });

    //   send emails to invited users
    if (!isOpenToAll) {
    }

    res.status(201).json({ election });
    //
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;

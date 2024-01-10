const { Router } = require("express");
const nodemailer = require("nodemailer");
const Election = require("../models/Election");
const User = require("../models/User");

// Routes to create an election

Router.post("/create-election", async (req, res) => {
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
  } catch (error) {}
});

const { Router } = require("express");
const users = require("../../models/User")

const router = Router();

router.get("/get-users", async (req, res) => {
    try {
      const userss = await users.find({})
  } catch (error) {}
});

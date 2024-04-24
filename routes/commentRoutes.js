const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // Logic to add a comment to a post
  res.send("Comment added");
});

module.exports = router;

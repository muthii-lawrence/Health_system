const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Programs API is working");
});

module.exports = router;

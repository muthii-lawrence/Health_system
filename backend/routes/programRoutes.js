const express = require("express");
const {
  createProgram,
  getPrograms,
} = require("../controllers/programController");

const router = express.Router();

router.post("/", createProgram);
router.get("/", getPrograms);

module.exports = router;

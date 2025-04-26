const programs = require("../models/Program");
const { v4: uuidv4 } = require("uuid");

const createProgram = (req, res) => {
  const { name } = req.body;
  const program = { id: uuidv4(), name };
  programs.push(program);
  res.status(201).json(program);
};

const getPrograms = (req, res) => {
  res.json(programs);
};

module.exports = { createProgram, getPrograms };

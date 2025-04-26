const clients = require("../models/Client");
const programs = require("../models/Program");
const { v4: uuidv4 } = require("uuid");

const registerClient = (req, res) => {
  const { name, age, gender } = req.body;
  const client = { id: uuidv4(), name, age, gender, programs: [] };
  clients.push(client);
  res.status(201).json(client);
};

const enrollClient = (req, res) => {
  const { clientId, programIds } = req.body;
  const client = clients.find((c) => c.id === clientId);
  if (!client) return res.status(404).json({ message: "Client not found" });

  programIds.forEach((pid) => {
    const program = programs.find((p) => p.id === pid);
    if (program && !client.programs.includes(program.id)) {
      client.programs.push(program.id);
    }
  });

  res.json(client);
};

const searchClients = (req, res) => {
  const { query } = req.query;
  const result = clients.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
  res.json(result);
};

const getClientProfile = (req, res) => {
  const { id } = req.params;
  const client = clients.find((c) => c.id === id);
  if (!client) return res.status(404).json({ message: "Client not found" });

  const enrolledPrograms = client.programs.map((pid) =>
    programs.find((p) => p.id === pid)
  );
  res.json({ ...client, enrolledPrograms });
};

module.exports = {
  registerClient,
  enrollClient,
  searchClients,
  getClientProfile,
};

const express = require("express");
const router = express.Router();
const {
  registerClient,
  listClients,
  getClientProfile,
  getPublicClientProfile,
} = require("../controllers/clientController");

router.post("/", registerClient);
router.get("/", listClients);
router.get("/:id", getClientProfile);
router.get("/public/:id", getPublicClientProfile);
router.get("/", (req, res) => res.send("Clients route"));


module.exports = router;

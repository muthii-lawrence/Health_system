const express = require("express");
const {
  registerClient,
  enrollClient,
  searchClients,
  getClientProfile,
} = require("../controllers/clientController");

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: API for managing clients and programs
 */

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Register a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *               dob:
 *                 type: string
 *               gender:
 *                 type: string
 *               phone_number:
 *                 type: string
 *     responses:
 *       201:
 *         description: Client registered successfully
 *       500:
 *         description: Server error
 */
router.post("/", registerClient);

/**
 * 
 * @swagger
 * /clients/enroll:
 *   post:
 *     summary: Enroll a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - phone
 *               - programId
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "Jane Doe"
 *               email:
 *                 type: string
 *                 example: "jane.doe@example.com"
 *               phone:
 *                 type: string
 *                 example: "0712345678"
 *               programId:
 *                 type: integer
 *                 example: 2
 *               enrollmentDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-04-26"
 *     responses:
 *       201:
 *         description: Client enrolled successfully
 *       400:
 *         description: Bad Request (missing required fields)
 *       500:
 *         description: Server error
 */

router.post("/enroll", enrollClient);
/**
 * @swagger
 * /api/clients/search:
 *   get:
 *     summary: Search for a client by name
 *     tags: [Clients]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Client's name to search
 *     responses:
 *       200:
 *         description: Client(s) found
 *       404:
 *         description: Client not found
 */
router.get("/search", searchClients);
/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: View client profile by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID
 *     responses:
 *       200:
 *         description: Client profile retrieved successfully
 *       404:
 *         description: Client not found
 */
router.get("/:id", getClientProfile);

module.exports = router;

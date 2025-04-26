const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const clientRoutes = require("./routes/clientRoutes");
const programRoutes = require("./routes/programRoutes");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MediTeck Health Information System API",
      version: "1.0.0",
      description: "API documentation for managing clients and health programs",
    },
    servers: [
      {
        url: "http://localhost:5000", // Your local backend URL
      },
    ],
  },
  apis: ["./routes/*.js"], // <-- we will add comments inside routes/*.js
};
const app = express();
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/clients", clientRoutes);
app.use("/api/programs", programRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

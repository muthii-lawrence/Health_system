const express = require("express");
const cors = require("cors");

const clientRoutes = require("./routes/clients");
const programRoutes = require("./routes/programs");
const enrollmentRoutes = require("./routes/enrollments");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes); // ✅ must be a function (router)
app.use("/api/programs", programRoutes);
app.use("/api/enrollments", enrollmentRoutes);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

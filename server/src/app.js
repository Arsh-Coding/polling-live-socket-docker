const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server running"
  });
});

const authRoutes = require(
  "./routes/auth.routes"
);

app.use("/api/auth", authRoutes);

const pollRoutes = require(
  "./routes/poll.routes"
);

const pollRoutes = require(
  "./routes/poll.routes.js"
);

app.use("/api/polls", pollRoutes);

module.exports = app;

require("dotenv").config();

const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const server = http.createServer(app);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    server.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
}

startServer();
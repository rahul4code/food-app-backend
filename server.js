// Load environment variables from .env file if using dotenv
require("dotenv").config();
const express = require("express");
const errorHandler = require("./src/middleware/errorHandler");
const route = require("./src/routes/restaurants.route");
const applyCORS = require("./src/middleware/cors");
const mongo = require("./src/database/mongo");

const app = express();

// Apply middleware, if any
app.use(express.json()); // Body parser middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(errorHandler); //error handling middleware
app.use(applyCORS);

// Use routes
app.use("/api", route);
app.get("/", (req, res) => {
  res.send("This is the root path");
});

//start express server

async function startServer() {
  try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
    await mongo.connect();
    // Close MongoDB connection when the server shuts down
    process.on("SIGINT", () => {
      mongo.disconnect();
      process.exit();
    });
  } catch (err) {
    console.error("error in starting server", err);
  }
}

startServer();

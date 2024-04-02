// src/app.js
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const restrauntsRoute = require('./routes/restaurants.route')
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware, if any
app.use(express.json()); // Body parser middleware
// Use routes
app.use("/api", restrauntsRoute);
app.get("/", (req, res) => {
  res.send("This is the root path");
});
app.use(errorHandler); //error handling middleware



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

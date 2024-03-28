// src/app.js
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const topRestaurantsRoutes = require("./routes/topRestaurantsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware, if any
app.use(express.json()); // Body parser middleware
// Use routes
app.use("/api", topRestaurantsRoutes);
app.use(errorHandler); //error handling middleware

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

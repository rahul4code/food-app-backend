// src/routes/topRestaurantsRoutes.js
const express = require("express");
const topRestaurantsController = require("../controllers/topRestaurantsController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the root path");
});

router.get("/getTopRestaurants", topRestaurantsController.getTopRestaurants);

module.exports = router;

// src/routes/topRestaurantsRoutes.js
const express = require("express");
const RestaurantsController = require("../controllers/restaurants.controller");


const router = express.Router();

router.get("/test", (req, res) => {
  res.send("This is the root path");
});

router.get("/getTopRestaurants", RestaurantsController.getTopRestaurants);

router.post("/foodVarities", RestaurantsController.foodVarities);

router.delete('deleteFood/:id/', RestaurantsController.deleteFood);

module.exports = router;

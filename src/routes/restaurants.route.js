// src/routes/topRestaurantsRoutes.js
const express = require("express");
const RestaurantsController = require("../controllers/restaurants.controller");
const router = express.Router();

router.get("/getTopRestaurants", RestaurantsController.getTopRestaurants);

router.post("/addTopRestaurants", RestaurantsController.addTopRestaurants);

router.get(
  "/getRestaurantVarieties",
  RestaurantsController.getRestaurantVarieties
);

router.post(
  "/addRestaurantVarieties",
  RestaurantsController.addRestaurantVarieties
);

router.delete(
  "/removeRestaurantVariety/:id",
  RestaurantsController.removeRestaurantVariety
);

router.get("/getRestaurantTypes", RestaurantsController.getRestaurantTypes);
module.exports = router;

// src/controllers/topRestaurantsController.js
const topRestaurantsService = require("../services/topRestaurantsServices");

exports.getTopRestaurants = async (req, res) => {
  try {
    const topRestaurants = await topRestaurantsService.getTopRestaurants();
    res.json(topRestaurants);
  } catch (error) {
    console.error("Error fetching top restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

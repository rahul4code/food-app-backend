// src/services/topRestaurantsService.js
const database = require("../database/mongo");

exports.getTopRestaurants = async () => {
  try {
    const collection = database.getCollection("topRestaurants");
    const documents = await collection.find({}).toArray();
    return documents;
  } catch (error) {
    throw new Error("Error fetching top restaurants from database");
  }
};

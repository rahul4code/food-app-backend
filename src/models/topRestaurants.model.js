const mongoose = require("mongoose");

const aggregatedDiscountInfoV3Schema = mongoose.Schema({
  header: String,
  subHeader: String,
});

const topRestaurantsSchema = mongoose.Schema({
  id: {
    type: String,
  },
  cloudinaryImageId: {
    type: String,
  },
  name: {
    type: String,
  },
  areaName: {
    type: String,
  },
  restaurantAddress: {
    type: String,
  },
  cuisines: {
    type: [String],
  },
  avgRatingString: {
    type: String,
  },
  slaString: {
    type: String,
  },
  aggregatedDiscountInfoV3: aggregatedDiscountInfoV3Schema,
});

module.exports = mongoose.model(
  "topRestaurants",
  topRestaurantsSchema,
  "top_restaurants"
);

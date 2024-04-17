const mongoose = require("mongoose");
const restaurantType = mongoose.Schema({
  id: {
    type: String,
  },

  imageId: {
    type: String,
  },

  link: {
    type: String,
  },
});

const restaurantTypeModel = mongoose.model("restaurant_types", restaurantType);
module.exports = restaurantTypeModel;

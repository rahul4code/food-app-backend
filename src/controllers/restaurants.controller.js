const restaurantVarietiesModel = require("../models/restaurantVarieties.model");
const topRestaurantsModel = require("../models/topRestaurants.model");
const mongo = require("../database/mongo");
const restaurantTypeModel = require("../models/restaurantType.model");

exports.getTopRestaurants = async (req, res) => {
  try {
    const topRestaurantsList = await topRestaurantsModel.find({});
    // console.log(topRestaurantsList, "list");
    res.status(200).json(topRestaurantsList);
  } catch (error) {
    console.error("Error fetching top restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addTopRestaurants = async (req, res) => {
  try {
    await topRestaurantsModel.create(req.body);
    res.status(200).send("Inserted successfully"); // Send the saved document as response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  }
};

exports.getRestaurantVarieties = async (req, res) => {
  try {
    console.log("connection established");
    const varietiesList = await restaurantVarietiesModel.find({});
    // console.log(varietiesList, "list");
    res.status(200).json(varietiesList);
  } catch (error) {
    console.error("Error in fetching:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addRestaurantVarieties = async (req, res) => {
  try {
    await restaurantVarietiesModel.create(req.body);
    res.status(200).send("Inserted successfully"); // Send the saved document as response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  }
};

exports.removeRestaurantVariety = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, "from query");
    await mongo.connect();
    const deleteFood = await restaurantVarietiesModel.findByIdAndDelete(id);
    if (!deleteFood) {
      return res.status(404).json({ message: "not found!" });
    }
    res.status(200).json(deleteFood);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal server error" });
  } finally {
    await mongo.disconnect();
  }
};

exports.getRestaurantTypes = async (req, res) => {
  try {
    const isExist = await mongo.getCollection(
      restaurantTypeModel.collection.name
    );
    if (isExist) {
      const list = await restaurantTypeModel.find({});
      res.status(200).json(list);
    } else {
      await restaurantTypeModel.create({});
      res.status(200).json([]);
    }
  } catch (error) {
    console.error("Error in fetching:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

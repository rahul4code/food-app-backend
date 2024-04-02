// src/controllers/topRestaurantsController.js
const restaurantVaritiesModel = require("../models/restrauntVarities.model");
const topRestaurants = require('../database/mongo')

exports.getTopRestaurants = async (req, res) => {
  try {
    const collectionName = await topRestaurants.getCollection("topRestaurants");
    const collectionData =  collectionName.find({}).toArray();
    res.status(200).json(collectionData);
  } catch (error) {
    console.error("Error fetching top restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.foodVarities = async(req,res)=>{
  try{
   const foodVarities = await restaurantVaritiesModel.create(req.body)
   res.status(200).json(foodVarities)
  }catch(err){
    console.error(err)
    res.status(500).json({error:'internal server error'})
  }
} 

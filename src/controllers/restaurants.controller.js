// src/controllers/topRestaurantsController.js
const { json } = require("express");
const restaurantVarietiesModel = require("../models/restaurantVarieties.model");
const topRestaurantsModel = require('../models/topRestaurants.model')

exports.getTopRestaurants = async (req, res) => {
  try {
  
    const collectionName =  await topRestaurantsModel.find({});
    
    res.status(200).json(collectionName);
  } catch (error) {
    console.error("Error fetching top restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.foodVarieties = async(req,res)=>{
  try{
   const foodVarieties = await restaurantVarietiesModel.create(req.body)
   res.status(200).json(foodVarieties)
  }catch(err){
    console.error(err)
    res.status(500).json({error:'internal server error'})
  }
} 

exports.deleteFood = async(req,res)=>{
  try{
    const {id} = req.params
   const deleteFood = await findByIdandDelete(id) 
   if(!deleteFood){
    return res.status(404).json({message:'not found!'})
   }
   res.status(200).json(deleteFood)
  }catch(err){
    console.error(err)
    res.status(500).json({error:'internal server error'})
  }
}

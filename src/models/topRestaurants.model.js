const mongoose = require('mongoose')

const topRestaurantsSchema = mongoose.Schema({
imgUrl:{
    type:String
},
restaurantName:{
    type:String
},
restaurantAddress:{
    type:String
},
cuisines:{
    type:Array
},
avgRating:{
    type:String
},
discount:{
    type:String
},
restaurantId:{
    type:String
}
})

const topRestaurants =  mongoose.model("top_restaurants", topRestaurantsSchema)
module.exports = topRestaurants
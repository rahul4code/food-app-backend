const mongoose = require('mongoose')

const topRestaurantsSchema = mongoose.Schema({
imgUrl:{
    type:String
},
restrauntName:{
    type:String
},
restrauntAddress:{
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

const topRestaurants =  mongoose.model("topRestaurants", topRestaurantsSchema)
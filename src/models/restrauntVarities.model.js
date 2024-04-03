const mongoose = require('mongoose')

const restaurantVaritiesSchema = mongoose.Schema({
  
        name:{
            type:String,
            required:true
        },

        image:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            required:false
        },
        cuisine:{
            type:Array,
            required:false
        }
       
    
})
//mongoose.model(<collectionName>,<collectionSchema>)
const Varities = mongoose.model("restaurantVarities", restaurantVaritiesSchema);

module.exports = Varities;
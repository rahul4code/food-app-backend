const mongoose = require('mongoose')

restaurantVaritiesSchema = mongoose.Schema({
  
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

const Varities = mongoose.model("Product", restaurantVaritiesSchema);

module.exports = Varities;
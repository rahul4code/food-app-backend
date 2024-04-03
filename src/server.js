// src/app.js
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const route = require('./routes/restaurants.route')
const mongo = require('./database/mongo')

// Load environment variables from .env file if using dotenv
require('dotenv').config();

const app = express();


// Apply middleware, if any
app.use(express.json()); // Body parser middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(errorHandler); //error handling middleware

// Use routes
app.use("/api", route);
app.get("/", (req, res) => {
  res.send("This is the root path");
});


//start express server

async function startServer(){
  try{

    //connect to mongodb
    await mongo.connect()

    //start express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=>{
      console.log(`Server is running on port : ${PORT}`)
    })

  }catch(err){
    console.error("error in starting server",err)
  }
}

startServer()
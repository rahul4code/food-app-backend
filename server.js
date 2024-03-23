const topRestaurants = require("./api/topRestaurants.js");
const collectionData = require('./index')
const express = require("express");
const app = express();
const PORT = 3000;
// console.log("collectionData",collectionData)
//Define routes
app.get("/", (req, res) => {
  res.send("This is the root path");
});

app.get("/api/getTopRestaurants", async (req, res) => {
  try {
    // Fetch documents from MongoDB collection
    const documents = await collectionData.find(); 
    console.log(res.json(documents));
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

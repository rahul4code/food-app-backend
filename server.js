const topRestaurants = require("./api/topRestaurants.js");
const express = require("express");
const app = express();
const PORT = 3000;

//Define routes
app.get("/", (req, res) => {
  res.send("This is the root path");
});

app.get("/api/getTopRestautants", (req, res) => {
  res.json(topRestaurants);
});

app.get("/api/whatsonyourmind", () => {});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

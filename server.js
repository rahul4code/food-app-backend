const express = require('express')
const app = express()
const port = 3000
const TopRestrauntsData = require('./topRestraunts')

//Define routes
app.get('/api/users',(req,res)=>{
  console.log(TopRestrauntsData)
  res.json(TopRestrauntsData)
})

//Start the server
app.listen(port,()=>{
    console.log("Server is running!!")
})
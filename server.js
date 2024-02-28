const express = require('express')
const app = express()
const port = 3000

//Define routes
app.get('/api/users',(req,res)=>{
  const users = [{name:'divya', status:'high'},{name:'sakhi',status:'very high'}]
  res.json(users)
})

//Start the server
app.listen(port,()=>{
    console.log("Server is running!!")
})
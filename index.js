const express = require('express');
const cors = require('cors')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());

// routes 
app.get('/',(req,res) => {
    res.send("hello world")
})

// listener 
app.listen(port,() => {
    console.log(`server is running on port : ${port}`)
})
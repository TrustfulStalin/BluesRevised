const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const db = mongoose.connection
const express = require('express')
const app = express()
//const router = require("./Controller/20s")
const methodOverride = require('method-override')
require("dotenv").config();
const PORT = process.env.PORT
const mongoURI = process.env.URI
const twentyRoute = require("./Controller/20s.js")
const Two = require("./Schema/20s")
const datafor20s = require("./Models/20s.js")
const cors = require('cors');

app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use(methodOverride("_metho3d"))

app.use(express.static(__dirname + '/public'));


// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

//app.use("/20s", twentyRoute);




mongoose.connect(`${mongoURI}`)
.then(()=> {
    console.log('the connection to mongod is established')
  
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.get('/creates', async (req, res) => {
    Two.create(datafor20s);
    res.send(datafor20s)
    res.json(datafor20s)
    console.log("got it!!!!")
  });
  
app.get('/20', async (req, res) => {
    try {
      const Two = await Two.find();
      res.send(Two);
      res.json(datafor20s);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get('/data', async (req, res) => {
    const found1 = await Two.find({})
  
  })





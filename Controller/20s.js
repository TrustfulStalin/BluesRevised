const express = require('express')
const app = express()
let Router = express.Router();
const two = require("../Models/20sSchema.js")
const dataFor20s = require("../Models/20s.js")
const moogoose = require('mongoose')

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());


Router.get('/seed', (req, res) => {
    two.create(dataFor20s)
    res.send(dataFor20s)
   
   
   })
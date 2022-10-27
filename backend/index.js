const express = require('express')
const mongoose = require("mongoose");


const bodyParser = require('body-parser')
const addplaceRoute= require('./routes/AddPlaceRoute')
const app = express()


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use(bodyParser.json())


// Adding a Router
app.use('/host', addplaceRoute);


mongoose
  .connect(
    // "mongodb+srv://sadia:123@vacay-database.o9kjjlr.mongodb.net/places?retryWrites=true&w=majority"
  "mongodb://localhost:27017/cafedb"
    )
  .then(() => {
    app.listen(8000);
    console.log("listening on port 8000")
  })
  .catch((err) => {
    console.log(err);
  });
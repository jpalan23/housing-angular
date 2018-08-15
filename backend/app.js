const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const houseRoutes = require('./routes/house_route');
const userRoutes = require('./routes/user_route');

mongoose.connect("mongodb+srv://jpalan:5kg18dpLdRrCVopN@cluster0-hbp8p.mongodb.net/housing", { useNewUrlParser: true })
  .then(()=>{
    console.log('connected to database');
  })
  .catch(()=>{
    console.log('connection to database failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-Width, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE,PUT , OPTIONS");
  next();
});

app.use("/api/houses",houseRoutes);

app.use("/api/users", userRoutes);

module.exports = app;
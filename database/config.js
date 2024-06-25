const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/product.model.js");
const productRoute = require("./routes/product.route.js");
const homeRoute = require("./routes/home.js"); // Corrigé le nom de la variable
const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:9O9PQEU0s5SY0H6i@cluster0.ntlyryf.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  if(mongoose.connect){
    console.log("data base est good")
  }else{
    console.log("non good :(")
  }
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const homeRoute = require("./routes/home.js"); // Corrigé le nom de la variable
const app = express();

// Configurer le moteur de vue EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var home = require('./routes/home');
// Routes
app.use("/api/products", productRoute);
app.use('/', home);
app.use("/", homeRoute); // Corrigé le nom de la variable

app.get("/", (req, res) => {
  res.send("Hello sidaxe pro ");
});

mongoose
  .connect(
    "mongodb+srv://admin:9O9PQEU0s5SY0H6i@cluster0.ntlyryf.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

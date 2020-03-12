require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

const AuthRoutes = require("./Router/Auth");
const TourRoutes = require("./Router/Tours");
const OperatorRoutes = require("./Router/Operator");
const DestinationsRouter = require("./Router/Destinations");
const imageRoutes = require("./Router/images");
const AttractionsRoutes = require("./Router/Attractions");
const reviewRoutes = require("./Router/Reviews");
const con = require("./db");
const passport = require("passport");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //allows access to any client
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); //define methods like post get put delete or all by *
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  ); // or you can use * for all
  next();
});

app.use(passport.initialize());

app.get("/", (req, res) => res.send("Greetings To Traaaaavelog"));

app.use("/auth", AuthRoutes);
app.use("/tours", TourRoutes);
app.use("/operators", OperatorRoutes);
app.use("/destination", DestinationsRouter);
app.use("/images", imageRoutes);
app.use("/attraction", AttractionsRoutes);
app.use("/reviews", reviewRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running successfully on Port", process.env.PORT)
);

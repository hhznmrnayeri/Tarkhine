"use strict";

const express = require("express");
const morgan = require("morgan");

const userRouter = require('./routes/userRouter')
const foodRouter = require('./routes/foodRouter')
const basketRouter = require('./routes/basketRouter')

const app = express();

//* middleware

app.use(express.json());

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Hello from the middleware!");
  next();
});

app.use(express.json());

app.use("/app/users", userRouter);
app.use("/app/food" , foodRouter)
app.use("/app/basket" , basketRouter)

module.exports = app;

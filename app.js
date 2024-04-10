"use strict";

const express = require("express");
const morgan = require("morgan");

const userRouter = require('./routes/userRouter')

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

module.exports = app;

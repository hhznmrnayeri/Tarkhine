"use strict";

const mongoose = require("mongoose");
const { userSchema } = require("./userSchema");

const User = mongoose.model("Tour", userSchema);

module.exports = User;

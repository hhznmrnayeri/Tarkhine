"use strict";

const mongoose = require("mongoose");

const { basketSchema } = require("./../schemas/basketSchema");

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;

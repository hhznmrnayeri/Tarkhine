"use strict";

const mongoose = require("mongoose");

const { basketSchema } = require("./../schemas/basketSchema");

const Food = mongoose.model("basket", basketSchema);

module.exports = Basket;

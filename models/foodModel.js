"use strict";

const mongoose = require("mongoose");

const { foodSchema } = require("./../schemas/foodSchema")

const Food = mongoose.model('Food' , foodSchema)

module.exports = Food
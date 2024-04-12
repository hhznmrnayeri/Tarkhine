"use strict";

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A food most have name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A food most have description"],
  },
  cover: {
    type: String,
    required: [true, "A food most have cover"],
  },
  images: [String],
  stars: {
    type: Number,
    default: 4,
  },
  price: {
    type: String,
    required: [true, "A food most have price"],
  },
  discount: {
    type: String,
  },
  finalPrice: {
    type: String,
    // default: price - (price / 100) * discount,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

exports.foodSchema = foodSchema;

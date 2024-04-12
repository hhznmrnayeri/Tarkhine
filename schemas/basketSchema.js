"use strict";

const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  item: {
    type: Object,
    required: true,
    trim: true,
  },
  number: {
    type: Number,
    default: 1,
  },
});

exports.basketSchema = basketSchema
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
  key : {
    type : String,
    required : true,
  }
});

exports.basketSchema = basketSchema
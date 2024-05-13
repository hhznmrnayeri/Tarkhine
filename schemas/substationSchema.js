"use strict";

const mongoose = require("mongoose");

const substationSchema = mongoose.Schema({
  name: {
    type: Object,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

exports.substationSchema = substationSchema;

"use strict";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  userName: {
    type: String,
    required: [true, "A user most have username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "A user most have email address"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  dateOfBirth: {
    type: Number,
    trim: true,
  },
  orders: {
    type: String,
  },
  locations: {
    type: String,
  },
  favorites: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
exports.userSchema = userSchema;
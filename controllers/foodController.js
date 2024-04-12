"use strict";
const Food = require("./../models/foodModel");

exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json({
      status: "success",
      result: foods.length,
      data: {
        foods: foods,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.getFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        food: food,
      },
    });
  } catch (err) {}
};

exports.createFood = async (req, res) => {
  const newFood = await Food.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: { food: newFood },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.updateFood = async (req, res) => {};

exports.deleteFood = async (req, res) => {};

exports.getFilteredFood = async (req, res) => {};

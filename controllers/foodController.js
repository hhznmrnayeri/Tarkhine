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
  } catch (err) {
    res.send(400).json({
      status: "fail",
      data: err,
    });
  }
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

exports.updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: { food },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};

exports.getFilteredFood = async (req, res) => {};

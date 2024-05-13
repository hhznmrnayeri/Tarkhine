"use strict";

const Basket = require("./../models/basketModel");

exports.getAllItems = async (req, res) => {};

exports.addItem = async (req, res) => {
  const newItem = await Basket.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: { item: newItem },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.updateItem = async (req, res) => {};

exports.deleteItem = async (req, res) => {};

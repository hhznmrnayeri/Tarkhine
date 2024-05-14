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

exports.updateItem = async (req, res) => {
  try {
    const item = await Substation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: { substation },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Basket.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};

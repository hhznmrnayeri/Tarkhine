"use strict";
const Substation = require("./../models/substationModel");

exports.getAllSubstation = async (req, res) => {
  try {
    const substation = await Food.find();

    res.status(200).json({
      status: "success",
      result: substation.length,
      data: {
        substation: substation,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.getSubstation = async (req, res) => {
  try {
    const substation = await Substation.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        substation: substation,
      },
    });
  } catch (err) {
    res.send(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.createSubstation = async (req, res) => {
  const newSubstation = await Substation.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: { substation: newSubstation },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err,
    });
  }
};

exports.updateSubstation = async (req, res) => {
  try {
    const substation = await Substation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

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

exports.deleteSubstation = async (req, res) => {
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

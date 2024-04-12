"use strict"
const Food = require('./../models/foodModel');

exports.getAllFood = async (req , res) => {};

exports.getFood = async (req , res) => {};

exports.createFood = async (req , res) => {
    const newFood = await Food.create(req.body)

    try {
        res.status(201).json({
            status : 'success',
            data : {food : newFood}
        })
    } catch (err) {
        res.status(400).json({
            status : 'fail',
            data : err
        })
    }

};

exports.updateFood = async (req , res) => {};

exports.deleteFood = async (req , res) => {};

exports.getFilteredFood = async (req , res) => {};

"use strict";

const express = require("express");
const router = express.Router();

const foodController = require("./../controllers/foodController");

router
  .route("/")
  .get(foodController.getAllFood)
  .post(foodController.createFood);

router
  .route("/:id")
  .get(foodController.getFood)
  .patch(foodController.updateFood)
  .delete(foodController.deleteFood);

router.route("/:type").post(foodController.getFilteredFood);

module.exports = router

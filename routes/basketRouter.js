"use strict";

const express = require("express");
const router = express.Router();

const basketController = require("./../controllers/basketController");

router.route('/').get(basketController.getAllItems).post(basketController.addItem)
router.route('/sumPrice').get(basketController.sumPrice)

router.route('/:id').patch(basketController.updateItem).delete(basketController.deleteItem)

module.exports = router

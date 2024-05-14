"use strict";

const express = require("express");
const router = express.Router();

const substationController = require("./../controllers/substationController");

router
  .route("/")
  .get(substationController.getAllSubstation)
  .post(substationController.createSubstation);

router
  .route("/:id")
  .get(substationController.getSubstation)
  .patch(substationController.updateSubstation)
  .delete(substationController.deleteSubstation);

module.exports = router;

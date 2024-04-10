"use strict";

const express = require("express");
const router = express.Router();

const userController = require("./../controllers/userController");

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/:username/:password").post(userController.loginUser);

module.exports = router;

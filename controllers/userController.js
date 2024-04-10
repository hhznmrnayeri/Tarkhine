"use strict";

const User = require("./../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      result: users.length,
      data: { users },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      requestAt: req.requestTime,
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};

exports.loginUser = async (req ,res) => {
  try {
    const user = await User.findOne({userName : req.params.username})


    if (user) {
      user.password === req.params.password ? res.status(200).json({user : user}) : res.status(400).send('wrong password')
    }else {
      console.log('user not found')
    }


  } catch (err) {
    res.status(400).send('hey')
  }
};

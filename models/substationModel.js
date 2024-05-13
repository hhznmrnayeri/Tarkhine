"use strict";

const mongoose = require("mongoose");

const { substationSchema } = require("./../schemas/substationSchema");

const Substation = mongoose.model("Substation", substationSchema);

module.exports = Substation;

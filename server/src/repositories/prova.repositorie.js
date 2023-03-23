const ProvaSchema = require("../models/prova.model");
const mongoose = require("mongoose");

const ProvaModel = mongoose.model("Prova", ProvaSchema);

module.exports = ProvaModel;

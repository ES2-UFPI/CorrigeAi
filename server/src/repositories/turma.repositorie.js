const TurmaSchema = require("../models/turma.model");
const mongoose = require("mongoose");

const TurmaModel = mongoose.model("Turma", TurmaSchema);

module.exports = TurmaModel;

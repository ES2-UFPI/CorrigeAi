const AlunoSchema = require("../models/aluno.model");
const mongoose = require("mongoose");

const AlunoModel = mongoose.model("Aluno", AlunoSchema);

module.exports = AlunoModel;

const ProfessorSchema = require("../models/professor.model");
const mongoose = require("mongoose");

const ProfessorModel = mongoose.model("Professor", ProfessorSchema);

module.exports = ProfessorModel;

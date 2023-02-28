const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  nome: String,
  senha: String,
  email: String,
  user: String,
});

module.exports = professorSchema;

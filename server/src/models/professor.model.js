const mongoose = require("mongoose");

//Criando model professor

ProfessorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    user: { type: String, required: true, unique: true },
  },
  { _id: user }
);

module.exports = ProfessorSchema;

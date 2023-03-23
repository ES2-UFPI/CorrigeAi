const mongoose = require("mongoose");

//Criando model aluno

AlunoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    user: { type: String, required: true, unique: true },
  },
  { _id: user } // definindo o user como chave primaria
);

module.exports = AlunoSchema;

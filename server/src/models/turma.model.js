const mongoose = require("mongoose");
const AlunoSchema = require("./aluno.model");
const ProvaSchema = require("./prova.model");
const ProfessorSchema = require("./professor.model");

TurmaSchema = new mongoose.Schema({
  descricao: String,
  professor: ProfessorSchema,
  alunos: [AlunoSchema],
  provas: [ProvaSchema],
});

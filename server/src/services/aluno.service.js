const AlunoModel = require("../repositories/aluno.repositorie");

const FindAll = () => {
  const Alunos = AlunoModel.find({});
  return Alunos;
};

const Creat = (aluno) => {
  const Aluno = AlunoModel.create(aluno);
  return Aluno;
};

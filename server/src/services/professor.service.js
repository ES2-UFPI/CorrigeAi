const ProfessorModel = require("../repositories/professor.repositorie");

const FindAll = () => {
  const Professores = AlunoModel.find({});
  return Professores;
};

const Creat = (professor) => {
  const Professor = ProfessorModel.create(professor);
  return Professor;
};

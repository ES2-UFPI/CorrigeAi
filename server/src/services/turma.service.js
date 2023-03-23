const TurmaModel = require("../repositories/turma.repositorie");

const FindAll = () => {
  const turmas = TurmaModel.find({});
  return turmas;
};

const FindById = (id) => {
  const turmas = TurmaModel.findById(id);
  return turmas;
};

const Creat = (turma) => {
  const Turma = TurmaModel.create(turma);
  return Turma;
};

const AddAluno = (id, novoAluno) => {
  const turma = TurmaModel.findByIdAndUpdate(
    id,
    { $push: { alunos: novoAluno } },
    { new: true }
  );
  return turma;
};

module.exports = { FindAll, FindById, Creat, AddAluno };

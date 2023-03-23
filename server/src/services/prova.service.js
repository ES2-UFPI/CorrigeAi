const ProvaModel = require("../repositories/prova.repositorie");

const FindAll = () => {
  const Provas = ProvaModel.find({});
  return Provas;
};

const Creat = (prova) => {
  const Prova = ProvaModel.create(prova);
  return Prova;
};

module.exports = { FindAll, Creat };

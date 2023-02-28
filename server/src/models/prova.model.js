const mongoose = require("mongoose");

const objetiva = new mongoose.Schema({
  enunciado: String,
  alternativas: [String],
  resposta: String,
});

//subjetiva
const subjetiva = new mongoose.Schema({
  enunciado: String,
  resposta: String,
});

//v ou f
const VerdadeiroFalso = new mongoose.Schema({
  enunciado: String,
  altervativa: [String],
  respostas: [String],
});

const Questao = new mongoose.Schema({
  pontuacao: Number,
  questao_objetiva: objetiva,
  questao_subjetiva: subjetiva,
  questao_VerdadeiroFalso: VerdadeiroFalso,
});

//criando o schema Prova
const ProvaSchema = new mongoose.Schema({
  tema: {
    type: String,
    required: true,
  },
  questoes: [
    {
      type: Questao,
      required: true,
    },
  ],
  data_ini: {
    type: Date,
    required: true,
  },
  data_final: {
    type: Date,
    required: true,
  },
  pontuacao_da_Prova: {
    type: Number,
    required: true,
  },
});

module.exports = ProvaSchema;

import mongoose from "mongoose";
const Schema = mongoose.Schema; 

const subjetiva = new Schema({
  enunciado: String, 
  resposta: String,
})

const objetiva = new Schema({
  enunciado: String,
  alternativas: [String],
  resposta: String,
})

const verdadeiroOuFalso = new Schema({
  enunciado: String,
  altervativa: [String],
  respostas: [String],
})

const questaoSchema = new Schema({
  tipo: String,
  objetiva: objetiva || null,
  subjetiva: subjetiva || null,
  verdadeiroOuFalso: verdadeiroOuFalso || null,
})

const provaSchema = new Schema({
  tema: { type: String, required: true },
  dataInicio: { type: Date, required: false },
  dataFim: { type: Date, required: false },
  prazo: Number,
  pontos: Number,
  
});

const tarefaSchema = new Schema({
  tema: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  prazo: Number,
  questoes: [
    { type: Schema.Types.ObjectId, ref: 'Questao'
    }
  ]
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);
const Prova = mongoose.model('Prova', provaSchema);
const Questao = mongoose.model('Questao', questaoSchema);

export { Tarefa, Prova ,Questao};


import mongoose from "mongoose";
const Schema = mongoose.Schema;



const tarefaSchema = new Schema({
  tema: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  prazo: Number,
});

const provaSchema = new Schema({
  theme: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  deadline: Number,
  pontos: Number,
}); 

const Tarefa = mongoose.model('Tarefa', tarefaSchema);
const Prova = mongoose.model('Prova', provaSchema);

export { Tarefa, Prova };



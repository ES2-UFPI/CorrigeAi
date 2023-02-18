import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv'
config();

import { Tarefa, Prova } from './model/Schemas';

const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;

app.use( 
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.post('/criarTarefa', async (req: Request, res: Response) => {
  const tarefa = new Tarefa({
    tema: "novo teste tarefa",
    dataInicio: new Date(),
    dataFim: new Date(),
    prazo: 20,
  });
  const criarTarefa = await tarefa.save();
  res.send(criarTarefa);
}); 

app.post('/criarProva', async (req: Request, res: Response) => {
  const prova = new Prova({
    tema: "teste prova",
    dataInicio: new Date(),
    dataFim: new Date(),
    prazo: 20,
    pontos: Number,
  });
  const criarProva = await prova.save();
  res.send(criarProva);
}); 

app.post('/criarProvaTeste', async (req: Request, res: Response) => {
  const prova = new Prova({
    tema: req.body.tema,
  });
  const criarProva = await prova.save();
  res.json(criarProva);
}); 
 
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});  

  
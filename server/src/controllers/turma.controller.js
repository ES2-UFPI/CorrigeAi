const express = require("express");
const service = require("../services/turma.service");

const app = express();
//app.use(express.json());

//cria uma turma no banco de dados
app.post("/turmas", async (req, res) => {
  try {
    const Turma = await service.Creat(req.body);
    res.status(200).json(Turma);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// recupera todas as turmas do banco de dados, independente do professor
app.get("/turmas", async (req, res) => {
  try {
    const Turmas = await service.FindAll();
    res.status(200).json(Turmas);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//adiciona aluno a uma turma ja criada
app.patch("/turmas/adicionarAluno", async (req, res) => {
  try {
    const id = req.params.id;
    const Turma = await service.AddAluno(id, req.body);
    res.status(200).json(Turma);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

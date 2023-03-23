const express = require("express");
const service = require("../services/prova.service");

const app = express();
app.use(express.json());

app.post("/provas", async (req, res) => {
  try {
    const Prova = await service.Creat(req.body);
    res.status(200).json(Prova);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/provas", async (req, res) => {
  try {
    const Provas = await service.FindAll();
    res.status(200).json(Provas);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

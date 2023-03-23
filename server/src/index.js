const dotenv = require("dotenv");
const ConnectToDataBase = require("./database/connect");
const ProvaModel = require("./models/prova.model");
const express = require("express");

dotenv.config();

ConnectToDataBase();

const app = express();
module.exports = app;
app.use(express.json());

require("./controllers/turma.controller");
require("./controllers/prova.controller");
require("./controllers/professor.controller");
require("./controllers/aluno.controller");

app.listen(5000);

module.exports = app;

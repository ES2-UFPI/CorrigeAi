const express = require("express");
const app = express();

app.use(express.json());

require("./prova.controller");
require("./turma.controller");

const port = 3000;
app.listen(port, () => console.log(` Servidor rodando na porta ${port}`));

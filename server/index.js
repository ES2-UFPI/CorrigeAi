const dotenv = require("dotenv");
const ConnectToDataBase = require("./src/database/connect");
const ProvaModel = require("./src/models/prova.model");

dotenv.config();

ConnectToDataBase();

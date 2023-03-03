const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const ConnectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.USER_MONGODB}:${process.env.MONGODB_PASSWORD}@cluster0.fpjz5nr.mongodb.net/CorrigeAi?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "ocorreu um erro ao se conectar com o banco de dados"
        );
      }
      return console.log("conexao bem sucedida");
    }
  );
};

module.exports = ConnectToDataBase;

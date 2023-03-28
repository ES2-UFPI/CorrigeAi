import { Request, Response } from "express";
import { AvaliationModel, AvaliationDocument } from "../src/model/Avaliation";

import { createAvaliationController } from "../src/controllers/AvaliationControllers";
describe("createAvaliationController", () => {
  it("deve criar uma nova avaliação e retornar o status 201 e a mensagem de sucesso", async () => {
    const data = {
      typeAvaliation: "Prova",
      themeAvaliation: "Matemática",
      questions: [
        "Qual é a fórmula da área do círculo?",
        "O que é um número primo?",
      ],
      initialAvaliation: new Date(),
      finalAvaliation: new Date(),
      time: 120,
      points: 10,
    };
  });
});

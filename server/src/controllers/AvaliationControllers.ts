import  { Request, Response } from 'express';
import { AvaliationModel, AvaliationDocument } from '../model/Avaliation';

export async function createAvaliationController (req: Request, res: Response) {
  try {
    const { typeAvaliation, themeAvaliation, questions, initialAvaliation, finalAvaliation, time, points } = req.body;
    console.log(req.body);
    const NewAvaliation = new AvaliationModel({
      typeAvaliation,
      themeAvaliation,
      questions,
      initialAvaliation,
      finalAvaliation,
      time,
      points,
    });

    const createAvaliation = await NewAvaliation.save();

    res.status(201).json({ message: 'Form created successfully', createAvaliation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating form' });
  }
}


export async function getAvaliationsController (req: Request, res: Response) {
  try {
    const Avaliations = await AvaliationModel.find();
    res.status(200).json({ message: 'Avaliations found successfully', Avaliations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error finding Avaliations' });
  }
}
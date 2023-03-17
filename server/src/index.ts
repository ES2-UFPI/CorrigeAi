import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv'
config();

import { AvaliationModel, AvaliationDocument } from './model/Avaliation';
import AvaliationResponseModel from './model/AvaliationResponse';

const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

           
app.post('/createAvaliation', async (req: Request, res: Response) => {
  try {
    const { typeAvaliation, themeAvaliation, questions, initialAvaliation, finalAvaliation, time, points } = req.body;
    console.log(req.body);
    const form = new AvaliationModel({
      typeAvaliation,
      themeAvaliation,
      questions,
      initialAvaliation,
      finalAvaliation,
      time,
      points,
    });

    const createAvaliation = await form.save();

    res.status(201).json({ message: 'Form created successfully', createAvaliation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating form' });
  }
}); 

app.get('/getAvaliations', async (req: Request, res: Response) => {
  try {
    const form = await AvaliationModel.find();
    res.status(200).json({ message: 'Form found successfully', form });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error finding form' });
  }
});  

app.post('/getResponseAvaliation/:id}', async (req: Request, res: Response) => {
  try {
    const { _id, questions } = req.body;
    const form = new AvaliationResponseModel({
      _id, 
      questions
    });

    const createResponseAvaliation = await form.save();
    res.status(201).json({ message: 'Form created successfully', createResponseAvaliation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error finding form' });
  }
});

 
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});  

  
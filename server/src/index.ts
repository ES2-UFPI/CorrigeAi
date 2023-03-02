import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv'
config();

import { FormModel, FormDocument } from './model/Schemas';

const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

  
app.post('/createForm', async (req: Request, res: Response) => {
  try {
    const { typeAvaliation, themeAvaliation, questions, initialAvaliation, finalAvaliation, time, points } = req.body;
    console.log(req.body);
    const form = new FormModel({
      typeAvaliation,
      themeAvaliation,
      questions,
      initialAvaliation,
      finalAvaliation,
      time,
      points,
    });

    const createForm = await form.save();

    res.status(201).json({ message: 'Form created successfully', createForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating form' });
  }
}); 

app.get('/getForms', async (req: Request, res: Response) => {
  try {
    const form = await FormModel.find();
    res.status(200).json({ message: 'Form found successfully', form });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error finding form' });
  }
});


mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});  

  
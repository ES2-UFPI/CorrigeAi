import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const app = express();

const db = await mongoose.connect('mongodb+srv://corrigeai:<corrigeai123>@corrigeai.cdc4okk.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
}); 

app.listen(5000); 


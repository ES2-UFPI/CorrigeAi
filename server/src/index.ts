import { config } from 'dotenv'
config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;



app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
}); 

app.listen(4000); 

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});


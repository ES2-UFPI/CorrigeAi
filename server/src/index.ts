import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv'
config();

import { AvaliationModel, AvaliationDocument } from './model/Avaliation';
import { Class, IClass } from './model/Class';
import { Professor, IProfessor } from './model/Professor';
import { Student, IStudent } from './model/Student';
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
}); 

app.get('/getAvaliations', async (req: Request, res: Response) => {
  try {
    const Avaliations = await AvaliationModel.find();
    res.status(200).json({ message: 'Avaliations found successfully', Avaliations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error finding Avaliations' });
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

app.post('/createClass', async (req: Request, res: Response) => {
  try {
    const { className, classSummary } = req.body;

    const newClass: IClass = new Class({
      className,
      classSummary,
    });

    const savedClass: IClass = await newClass.save();

    res.status(201).json({ message: 'Form created successfully', savedClass});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/getClasses', async (req: Request, res: Response) => {
  try {
    const classes: IClass[] = await Class.find({});
    res.status(200).json({ classes });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



app.post('/createProfessor', async (req: Request, res: Response) => {
  try {
    const { name, password, email, user } = req.body;

    const newProfessor: IProfessor = new Professor({
      name,
      password,
      email,
      user,
    });

    const savedProfessor: IProfessor = await newProfessor.save();

    res.status(201).json({ message: 'Professor created successfully', savedProfessor});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



app.get('/getProfessorByEmail/:email', async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const professor: IProfessor | null = await Professor.findOne({ email });
    if (!professor) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    res.status(200).json({ professor });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/searchByEmail', async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const professor: IProfessor | null = await Professor.findOne({ email });
    const student: IStudent | null = await Student.findOne({ email });

    if (professor || student) {
      res.status(200).json({ professor, student });
    } else {
      res.status(404).json({ message: `No record found for email: ${email}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



app.post('/createStudent', async (req: Request, res: Response) => {
  try {
    const { name, password, email, user } = req.body;

    const newStudent: IStudent = new Student({
      name,
      password,
      email,
      user,
    });

    const savedStudent: IStudent = await newStudent.save();

    res.status(201).json({ message: 'Student created successfully', savedStudent});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/getProfessors', async (req: Request, res: Response) => {
  try {
    const Professors: IProfessor[] = await Professor.find({});
    res.status(200).json({ Professors });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



app.get('/getStudents', async (req: Request, res: Response) => {
  try {
    const Students: IClass[] = await Student.find({});
    res.status(200).json({ Students });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

 
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});  

  
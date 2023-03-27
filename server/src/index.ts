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

import { createAvaliationController, getAvaliationsController } from './controllers/AvaliationControllers';
import { createClassController, getClassesControler } from './controllers/ClassControlers';
import { createProfessorController, createStudentController, getProfessorByEmailController, getProfessorsController, getStudentsController, searchByEmailController } from './controllers/UsersControllers';

const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());


app.post('/createAvaliation', createAvaliationController)
app.get('/getAvaliations', getAvaliationsController)
app.post('/createClass', createClassController);
app.get('/getClasses', getClassesControler);
app.post('/createProfessor', createProfessorController);
app.get('/getProfessors', getProfessorsController);
app.get('/getProfessorByEmail/:email', getProfessorByEmailController)
app.post('/createStudent', createStudentController)
app.get('/getStudents', getStudentsController)
app.get('/searchByEmail', searchByEmailController)


 
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});  

  
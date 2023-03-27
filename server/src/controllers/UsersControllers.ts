import { Request, Response } from 'express';
import { Professor, IProfessor } from '../model/Professor';
import { Student, IStudent } from '../model/Student';


export async function createProfessorController (req: Request, res: Response){
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
}

export async function getProfessorsController (req: Request, res: Response) {
  
  try {
    const Professors: IProfessor[] = await Professor.find({});

    Professors.forEach((professor) => {
      professor.password = '';
    });

    console.log(Professors);
    res.status(200).json({ Professors });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
} 

export async function getProfessorByEmailController (req: Request, res: Response){
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
}

export async function createStudentController (req: Request, res: Response) {

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
}

export async function getStudentsController (req: Request, res: Response) {
  
  try {
    const Students: IStudent[] = await Student.find({});

    Students.forEach((student) => {
      student.password = '';
    });

    res.status(200).json({ Students });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}


export async function searchByEmailController (req: Request, res: Response){

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
}
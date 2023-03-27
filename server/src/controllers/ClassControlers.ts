import  { Request, Response } from 'express';
import { Class, IClass } from '../model/Class';
import { Professor, IProfessor } from '../model/Professor';
import { Student, IStudent } from '../model/Student';


export async function createClassController (req: Request, res: Response) {
  try {
    const { className, classSummary, professor, students } = req.body;

    const _id = professor; 
    const findProfessor: IProfessor | null = await Professor.findOne({ _id });
    if (!findProfessor) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    console.log(findProfessor);
    const newClass: IClass = new Class({
      className,
      classSummary,
      professor,
      students
    });

    const savedClass: IClass = await newClass.save();

    res.status(201).json({ message: 'Form created successfully', savedClass});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}


export async function getProfessorClassesControler(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    const professor = _id;
    const findClasses: IClass[] = await Class.find({ professor })
      .populate({ path: 'professor', select: '-password' })
      .populate({ path: 'students', select: '-password', options: { 
        skipInvalidIds: true,
        minLimit: 1
      }});
    res.status(200).json({ findClasses });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}

export async function addStudentOnClassControler(req: Request, res: Response) {
  
  try {

    const { _id, email } = req.body;
    const findClass: IClass | null = await Class.findOne({ _id });

    if (!findClass) {
      return res.status(404).json({ message: 'Class ${_id} not found' });
    }

    const findStudent: IStudent | null = await Student.findOne({ email });

    if (!findStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    if(findClass.students.includes(findStudent._id)) {
      return res.status(404).json({ message: 'Student already on class' });
    }

    findClass.students.push(findStudent._id);
    const addStudent = await findClass.save();
    res.status(200).json({ message: 'Student added on class successfully', addStudent});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}  


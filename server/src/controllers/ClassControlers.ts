import  { Request, Response } from 'express';
import { Class, IClass } from '../model/Class';


export async function createClassController (req: Request, res: Response) {
  try {
    const { className, classSummary, professor, students } = req.body;

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

export async function getClassesControler(req: Request, res: Response) {
  try {
    const classes: IClass[] = await Class.find({});
    res.status(200).json({ classes });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}

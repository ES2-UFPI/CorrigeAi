import { Document, Model, model, Schema } from 'mongoose';
import { IProfessor } from './Professor';
import { IStudent } from './Student';

export interface IClass extends Document {
  professor: IProfessor;
  students: IStudent[];
  className: string;
  classSummary: string;
}

const classSchema: Schema<IClass> = new Schema({
  professor: { type: Schema.Types.ObjectId, ref: 'Professor', required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student'}],
  className: { type: String, required: true },
  classSummary: { type: String, required: true },
});

export const Class: Model<IClass> = model<IClass>('Class', classSchema);
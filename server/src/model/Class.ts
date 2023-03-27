import { Document, Model, model, Schema } from 'mongoose';

export interface IClass extends Document {
  professor: string;
  students: string[];
  className: string;
  classSummary: string;
}

const classSchema: Schema<IClass> = new Schema({
  professor: { type: String, required: true },
  students: [{ type: String, required: true }],
  className: { type: String, required: true },
  classSummary: { type: String, required: true },
});

export const Class: Model<IClass> = model<IClass>('Class', classSchema);